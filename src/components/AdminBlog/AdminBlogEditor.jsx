import { useEffect, useRef, useState } from "react";
import {
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiBold,
  FiImage,
  FiItalic,
  FiLink,
  FiList,
  FiPaperclip,
  FiSend,
  FiTrash2,
  FiType,
  FiUnderline,
  FiUpload,
  FiX,
} from "react-icons/fi";
import { getEditorInitialValues } from "../../store/blog/blogUtils.js";
import {
  fontOptions,
  fontSizeOptions,
  getUploadLabel,
  readFileAsDataUrl,
  readTimeOptions,
} from "./AdminBlogEditor.helpers.js";
import {
  AddTagButton,
  CardHeading,
  DesktopEditorActions,
  EditorArea,
  EditorCard,
  EditorGrid,
  EditorSurface,
  EditorToolbar,
  Field,
  Input,
  Label,
  MobileEditorActions,
  PrimaryButton,
  SecondaryButton,
  Select,
  SettingsCard,
  SettingsNote,
  SettingsTitle,
  TagChip,
  TagList,
  TagRow,
  Tool,
  ToolColorInput,
  ToolSelect,
  UploadBox,
} from "./AdminBlog.styles.js";

const AdminBlogEditor = ({
  categories,
  isSubmitting = false,
  mode = "create",
  onCancel,
  onSubmit,
  post,
  submitError = "",
}) => {
  const [formValues, setFormValues] = useState(getEditorInitialValues(post));
  const [tagInput, setTagInput] = useState("");
  const [hasInlineImage, setHasInlineImage] = useState(false);
  const editorRef = useRef(null);
  const selectionRef = useRef(null);
  const selectedImageRef = useRef(null);
  const featuredVideoInputRef = useRef(null);
  const inlineImageInputRef = useRef(null);

  const refreshInlineImageState = () => {
    const images = Array.from(editorRef.current?.querySelectorAll("img") || []);
    const selectedImage = selectedImageRef.current;

    if (!selectedImage || !images.includes(selectedImage)) {
      selectedImageRef.current = null;
    }

    setHasInlineImage(images.length > 0);
  };

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }

    if (editorRef.current.innerHTML !== formValues.content) {
      editorRef.current.innerHTML = formValues.content || "";
    }

    refreshInlineImageState();
  }, [formValues.content]);

  const syncEditorContent = () => {
    const nextContent = editorRef.current?.innerHTML || "";

    setFormValues((currentValues) => ({
      ...currentValues,
      content: nextContent,
    }));
    refreshInlineImageState();
  };

  const saveSelection = () => {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0 || !editorRef.current?.contains(selection.anchorNode)) {
      return;
    }

    selectionRef.current = selection.getRangeAt(0).cloneRange();
  };

  const restoreSelection = () => {
    const selection = window.getSelection();

    if (!selection || !selectionRef.current) {
      return;
    }

    selection.removeAllRanges();
    selection.addRange(selectionRef.current);
  };

  const runCommand = (command, value = null) => {
    if (!editorRef.current) {
      return;
    }

    editorRef.current.focus();
    restoreSelection();
    document.execCommand("styleWithCSS", false, true);
    document.execCommand(command, false, value);
    syncEditorContent();
    saveSelection();
  };

  const handleFieldChange = (field) => (event) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: event.target.value,
    }));
  };

  const handleAddTag = () => {
    const nextTag = tagInput.trim();

    if (!nextTag || formValues.tags.includes(nextTag)) {
      return;
    }

    setFormValues((currentValues) => ({
      ...currentValues,
      tags: [...currentValues.tags, nextTag],
    }));
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      tags: currentValues.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleUpload = async (field, file) => {
    if (!file) {
      return;
    }

    const dataUrl = await readFileAsDataUrl(file);

    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: dataUrl,
    }));
  };

  const handleFeaturedVideoChange = async (event) => {
    try {
      await handleUpload("featuredVideo", event.target.files?.[0]);
    } finally {
      event.target.value = "";
    }
  };

  const handleInlineImageChange = async (event) => {
    const file = event.target.files?.[0];

    try {
      if (!file) {
        return;
      }

      const dataUrl = await readFileAsDataUrl(file);
      runCommand("insertImage", dataUrl);
      refreshInlineImageState();
    } finally {
      event.target.value = "";
    }
  };

  const handleEditorClick = (event) => {
    if (event.target instanceof HTMLImageElement) {
      selectedImageRef.current = event.target;
      setHasInlineImage(true);
      return;
    }

    selectedImageRef.current = null;
    refreshInlineImageState();
    saveSelection();
  };

  const handleRemoveInlineImage = () => {
    const editorElement = editorRef.current;

    if (!editorElement) {
      return;
    }

    const imageToRemove = editorElement.contains(selectedImageRef.current)
      ? selectedImageRef.current
      : editorElement.querySelector("img");

    if (!imageToRemove) {
      refreshInlineImageState();
      return;
    }

    imageToRemove.remove();
    selectedImageRef.current = null;
    syncEditorContent();
    editorElement.focus();
  };

  const handleInsertLink = () => {
    const url = window.prompt("Enter the link URL");

    if (!url) {
      return;
    }

    runCommand("createLink", url.trim());
  };

  const handleSubmit = (status) => {
    const content = editorRef.current?.innerHTML || formValues.content;

    onSubmit(
      {
        ...formValues,
        content,
        tags: formValues.tags.length ? formValues.tags : [formValues.category],
      },
      status
    );
  };

  const actionButtons = (
    <>
      <SecondaryButton onClick={onCancel} type="button">
        Cancel
      </SecondaryButton>
      <SecondaryButton disabled={isSubmitting} onClick={() => handleSubmit("Draft")} type="button">
        {isSubmitting && mode === "create" ? "Saving..." : "Save Draft"}
      </SecondaryButton>
      <PrimaryButton disabled={isSubmitting} onClick={() => handleSubmit("Published")} type="button">
        {isSubmitting ? "Submitting..." : mode === "edit" ? "Update Post" : "Publish Post"} <FiSend />
      </PrimaryButton>
    </>
  );

  return (
    <EditorGrid>
      <EditorCard>
        <CardHeading>
          <h3>{mode === "edit" ? "Edit Blog Post" : "Create Blog Post"}</h3>
          <p>
            Manage headline, summary, body content, and publish metadata from one responsive editor. Add the first
            image inside Blog Content to use it as the cover image.
          </p>
          {submitError ? <p style={{ color: "#c13a3a", marginTop: "0.5rem" }}>{submitError}</p> : null}
        </CardHeading>
        <Field>
          <Label>Blog Title</Label>
          <Input onChange={handleFieldChange("title")} value={formValues.title} />
        </Field>
        <Field>
          <Label>Author Name</Label>
          <Input onChange={handleFieldChange("author")} value={formValues.author} />
        </Field>
        <Field>
          <Label>Excerpt (Brief description of your blog)</Label>
          <Input onChange={handleFieldChange("excerpt")} value={formValues.excerpt} />
        </Field>
        <Field>
          <Label>Blog Content</Label>
          <EditorSurface>
            <EditorToolbar
              onMouseDown={(event) => {
                if (event.target.closest("button")) {
                  event.preventDefault();
                  restoreSelection();
                }
              }}
            >
              <Tool aria-label="Undo" onClick={() => runCommand("undo")} type="button">
                <FiPaperclip style={{ transform: "rotate(135deg)" }} />
              </Tool>
              <Tool aria-label="Redo" onClick={() => runCommand("redo")} type="button">
                <FiPaperclip style={{ transform: "rotate(-45deg)" }} />
              </Tool>
              <ToolSelect
                aria-label="Font family"
                defaultValue="Arial"
                onChange={(event) => runCommand("fontName", event.target.value)}
              >
                {fontOptions.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </ToolSelect>
              <ToolSelect
                aria-label="Font size"
                defaultValue="3"
                onChange={(event) => runCommand("fontSize", event.target.value)}
              >
                {fontSizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </ToolSelect>
              <Tool aria-label="Bold" onClick={() => runCommand("bold")} type="button">
                <FiBold />
              </Tool>
              <Tool aria-label="Italic" onClick={() => runCommand("italic")} type="button">
                <FiItalic />
              </Tool>
              <Tool aria-label="Underline" onClick={() => runCommand("underline")} type="button">
                <FiUnderline />
              </Tool>
              <Tool aria-label="Strikethrough" onClick={() => runCommand("strikeThrough")} type="button">
                <FiType />
              </Tool>
              <ToolColorInput
                aria-label="Text color"
                defaultValue="#891b1c"
                onChange={(event) => runCommand("foreColor", event.target.value)}
                type="color"
              />
              <Tool aria-label="Insert link" onClick={handleInsertLink} type="button">
                <FiLink />
              </Tool>
              <Tool aria-label="Insert image" onClick={() => inlineImageInputRef.current?.click()} type="button">
                <FiImage />
              </Tool>
              <Tool
                aria-label="Remove image"
                disabled={!hasInlineImage}
                onClick={handleRemoveInlineImage}
                title={hasInlineImage ? "Remove selected image" : "No image to remove"}
                type="button"
              >
                <FiTrash2 />
              </Tool>
              <Tool aria-label="Bullet list" onClick={() => runCommand("insertUnorderedList")} type="button">
                <FiList />
              </Tool>
              <Tool aria-label="Align left" onClick={() => runCommand("justifyLeft")} type="button">
                <FiAlignLeft />
              </Tool>
              <Tool aria-label="Align center" onClick={() => runCommand("justifyCenter")} type="button">
                <FiAlignCenter />
              </Tool>
              <Tool aria-label="Align right" onClick={() => runCommand("justifyRight")} type="button">
                <FiAlignRight />
              </Tool>
              <Tool aria-label="Justify text" onClick={() => runCommand("justifyFull")} type="button">
                <FiAlignJustify />
              </Tool>
              <Tool aria-label="Clear formatting" onClick={() => runCommand("removeFormat")} type="button">
                <FiX />
              </Tool>
            </EditorToolbar>
            <EditorArea
              contentEditable
              data-placeholder="Write your blog content here..."
              onClick={handleEditorClick}
              onInput={syncEditorContent}
              onKeyUp={saveSelection}
              onMouseUp={saveSelection}
              ref={editorRef}
              suppressContentEditableWarning
            />
            <input
              accept="image/*"
              hidden
              onChange={handleInlineImageChange}
              ref={inlineImageInputRef}
              type="file"
            />
          </EditorSurface>
        </Field>
        <DesktopEditorActions>{actionButtons}</DesktopEditorActions>
      </EditorCard>

      <SettingsCard>
        <SettingsTitle>Post Settings</SettingsTitle>
        <SettingsNote>Manage metadata, schedule, tags, and featured video from this panel.</SettingsNote>
        <Field>
          <Label>Category</Label>
          <Select onChange={handleFieldChange("category")} value={formValues.category}>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label>Estimated reading time</Label>
          <Select onChange={handleFieldChange("readTime")} value={formValues.readTime}>
            {readTimeOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label>Publish Date</Label>
          <Input onChange={handleFieldChange("publishDate")} type="date" value={formValues.publishDate} />
        </Field>
        <Field>
          <Label>Tag</Label>
          <TagRow>
            <Input onChange={(event) => setTagInput(event.target.value)} value={tagInput} />
            <AddTagButton onClick={handleAddTag} type="button">
              ADD
            </AddTagButton>
          </TagRow>
          {formValues.tags.length ? (
            <TagList>
              {formValues.tags.map((tag) => (
                <TagChip key={tag}>
                  <span>{tag}</span>
                  <button onClick={() => handleRemoveTag(tag)} type="button">
                    <FiX />
                  </button>
                </TagChip>
              ))}
          </TagList>
        ) : null}
        </Field>
        <Field>
          <Label>Featured Video</Label>
          <Input
            onChange={handleFieldChange("featuredVideo")}
            placeholder="Paste a YouTube or website URL"
            value={formValues.featuredVideo}
          />
          <UploadBox as="label">
            <FiUpload size={20} />
            <span>
              {getUploadLabel(
                formValues.featuredVideo,
                "Upload or paste a featured video link",
                "Featured video selected from your device"
              )}
            </span>
            <input
              accept="video/*"
              hidden
              onChange={handleFeaturedVideoChange}
              ref={featuredVideoInputRef}
              type="file"
            />
          </UploadBox>
        </Field>
      </SettingsCard>
      <MobileEditorActions>{actionButtons}</MobileEditorActions>
    </EditorGrid>
  );
};

export default AdminBlogEditor;
