export const readTimeOptions = ["2 min Read", "3 min Read", "4 min Read", "5 min Read", "8 min Read"];

export const fontOptions = ["Arial", "Georgia", "Tahoma", "Times New Roman", "Verdana"];

export const fontSizeOptions = [
  { label: "12", value: "2" },
  { label: "14", value: "3" },
  { label: "18", value: "4" },
  { label: "24", value: "5" },
];

export const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Unable to read the selected file."));
    reader.readAsDataURL(file);
  });

export const getUploadLabel = (value, emptyLabel, selectedLabel) => {
  if (!value) {
    return emptyLabel;
  }

  if (value.startsWith("data:")) {
    return selectedLabel;
  }

  return value;
};
