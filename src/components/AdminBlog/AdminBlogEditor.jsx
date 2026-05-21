import { useState } from "react";
import {
  FiCalendar,
  FiImage,
  FiLink,
  FiList,
  FiPaperclip,
  FiSend,
  FiUpload,
  FiX,
} from "react-icons/fi";
import { getEditorInitialValues } from "./adminBlogStore.js";
import {
  Actions,
  AddTagButton,
  CardHeading,
  EditorArea,
  EditorCard,
  EditorGrid,
  EditorSurface,
  EditorToolbar,
  Field,
  Input,
  Label,
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
  UploadBox,
} from "./AdminBlog.styles.js";

const toolbarIcons = [FiPaperclip, FiList, FiLink, FiImage, FiCalendar];
const readTimeOptions = ["2 min Read", "3 min Read", "4 min Read", "5 min Read", "8 min Read"];

const AdminBlogEditor = ({
  categories,
  mode = "create",
  onCancel,
  onSubmit,
  post,
}) => {
  const [formValues, setFormValues] = useState(getEditorInitialValues(post));
  const [tagInput, setTagInput] = useState("");

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

  const handleSubmit = (status) => {
    onSubmit({
      ...formValues,
      tags: formValues.tags.length ? formValues.tags : [formValues.category],
    }, status);
  };

  return (
    <EditorGrid>
      <EditorCard>
        <CardHeading>
          <h3>{mode === "edit" ? "Edit Blog Post" : "Create Blog Post"}</h3>
          <p>Manage headline, summary, body content, and publish metadata from one responsive editor.</p>
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
            <EditorToolbar>
              <Tool as="span">Arial</Tool>
              <Tool as="span">00</Tool>
              {toolbarIcons.map((Icon, index) => (
                <Tool key={index} type="button">
                  <Icon />
                </Tool>
              ))}
            </EditorToolbar>
            <EditorArea onChange={handleFieldChange("content")} value={formValues.content} />
          </EditorSurface>
        </Field>
        <Actions>
          <SecondaryButton onClick={onCancel} type="button">
            Cancel
          </SecondaryButton>
          <SecondaryButton onClick={() => handleSubmit("Draft")} type="button">
            Save Draft
          </SecondaryButton>
          <PrimaryButton onClick={() => handleSubmit("Published")} type="button">
            {mode === "edit" ? "Update Post" : "Publish Post"} <FiSend />
          </PrimaryButton>
        </Actions>
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
          <UploadBox>
            <FiUpload size={20} />
            <span>{formValues.featuredVideo ? formValues.featuredVideo : "Upload or paste a featured video link"}</span>
          </UploadBox>
        </Field>
      </SettingsCard>
    </EditorGrid>
  );
};

export default AdminBlogEditor;
