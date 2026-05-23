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
  FiType,
  FiUnderline,
  FiUpload,
  FiX,
} from "react-icons/fi";
import { getEditorInitialValues } from "../../store/blog/blogUtils.js";
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
  UploadActionButton,
  UploadActions,
  UploadBox,
  UploadPreview,
} from "./AdminBlog.styles.js";

const readTimeOptions = ["2 min Read", "3 min Read", "4 min Read", "5 min Read", "8 min Read"];
const fontOptions = ["Arial", "Georgia", "Tahoma", "Times New Roman", "Verdana"];
const fontSizeOptions = [
  { label: "12", value: "2" },
  { label: "14", value: "3" },
  { label: "18", value: "4" },
  { label: "24", value: "5" },
];

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Unable to read the selected file."));
    reader.readAsDataURL(file);
  });

const loadImageElement = (file) =>
  new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      resolve({
        image,
        revoke: () => URL.revokeObjectURL(objectUrl),
      });
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Unable to process the selected image."));
    };

    image.src = objectUrl;
  });

const resizeImageFile = async (file, maxDimension) => {
  const isResizableRasterImage =
    file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "image/webp";

  if (!isResizableRasterImage) {
    return readFileAsDataUrl(file);
  }

  const { image, revoke } = await loadImageElement(file);

  try {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    const largestSide = Math.max(width, height);

    if (!largestSide || largestSide <= maxDimension) {
      return readFileAsDataUrl(file);
    }

    const scale = maxDimension / largestSide;
    const canvas = document.createElement("canvas");

    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));

    const context = canvas.getContext("2d");

    if (!context) {
      return readFileAsDataUrl(file);
    }

    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL(file.type === "image/jpg" ? "image/jpeg" : file.type, 0.82);
  } finally {
    revoke();
  }
};

const readOptimizedFileAsDataUrl = (file, maxDimension) => {
  if (!file || !file.type.startsWith("image/")) {
    return readFileAsDataUrl(file);
  }

  return resizeImageFile(file, maxDimension);
};

const getUploadLabel = (value, emptyLabel, selectedLabel) => {
  if (!value) {
    return emptyLabel;
  }

  if (value.startsWith("data:")) {
    return selectedLabel;
  }

  return value;
};

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
  const editorRef = useRef(null);
  const selectionRef = useRef(null);
  const featuredImageInputRef = useRef(null);
  const featuredVideoInputRef = useRef(null);
  const inlineImageInputRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }

    if (editorRef.current.innerHTML !== formValues.content) {
      editorRef.current.innerHTML = formValues.content || "";
    }
  }, [formValues.content]);

  const syncEditorContent = () => {
    const nextContent = editorRef.current?.innerHTML || "";

    setFormValues((currentValues) => ({
      ...currentValues,
      content: nextContent,
    }));
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

  const handleUpload = async (field, file, maxDimension) => {
    if (!file) {
      return;
    }

    const dataUrl = await readOptimizedFileAsDataUrl(file, maxDimension);

    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: dataUrl,
      ...(field === "image" ? { imageRemoved: false } : {}),
    }));
  };

  const handleFeaturedImageChange = async (event) => {
    try {
      await handleUpload("image", event.target.files?.[0], 1600);
    } finally {
      event.target.value = "";
    }
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

      const dataUrl = await readOptimizedFileAsDataUrl(file, 1200);
      runCommand("insertImage", dataUrl);
    } finally {
      event.target.value = "";
    }
  };

  const handleInsertLink = () => {
    const url = window.prompt("Enter the link URL");

    if (!url) {
      return;
    }

    runCommand("createLink", url.trim());
  };

  const handleRemoveFeaturedImage = () => {
    setFormValues((currentValues) => ({
      ...currentValues,
      image: "",
      imageRemoved: true,
    }));
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
          <p>Manage headline, summary, body content, and publish metadata from one responsive editor.</p>
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
        <SettingsNote>Manage metadata, schedule, tags, featured image, and featured video from this panel.</SettingsNote>
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
          <Label>Featured Image</Label>
          <UploadBox>
            {formValues.image ? <UploadPreview alt="Featured blog preview" src={formValues.image} /> : <FiUpload size={20} />}
            <span>
              {getUploadLabel(
                formValues.image,
                "Upload a featured image for this blog post",
                "Featured image selected from your device"
              )}
            </span>
            <UploadActions>
              <UploadActionButton onClick={() => featuredImageInputRef.current?.click()} type="button">
                Browse
              </UploadActionButton>
              {formValues.image ? (
                <UploadActionButton onClick={handleRemoveFeaturedImage} type="button">
                  Remove
                </UploadActionButton>
              ) : null}
            </UploadActions>
            <input
              accept="image/*"
              hidden
              onChange={handleFeaturedImageChange}
              ref={featuredImageInputRef}
              type="file"
            />
          </UploadBox>
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
