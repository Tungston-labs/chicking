// useFranchiseForm.js
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { submitFranchiseEnquiry } from "../../api/index.js";

const titles = [
  "Grow With Us",
  "Together Towards Growth",
  "A Partnership for Success",
  "Let’s Grow Together",
];

const useFranchiseForm = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const initialCountry =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("country") ||
        new URLSearchParams(window.location.search).get("territory") ||
        ""
      : "";

  const [selected, setSelected] = useState("unit");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: initialCountry,
    investment: "",
    additionalInfo: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (!formData.investment) {
      newErrors.investment =
        "Please select investment capacity";
    }

    if (!formData.file) {
      newErrors.file = "Please upload a document";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      investment: "",
      additionalInfo: "",
      file: null,
    });

    setSelected("unit");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitFranchiseEnquiry({
        formData,
        interest: selected,
      });

      toast.success("Franchise inquiry sent successfully");
      resetForm();
    } catch (error) {
      toast.error(
        error?.message || "Unable to send franchise inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    titles,
    titleIndex,
    selected,
    setSelected,
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
  };
};

export default useFranchiseForm;
