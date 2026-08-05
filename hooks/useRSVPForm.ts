'use client';

import { useState } from 'react';
import { sendRSVPEmail, RSVPPayload } from '@/lib/email-service';

export interface RSVPFormErrors {
  fullName?: string;
  phone?: string;
  attendance?: string;
}

export function useRSVPForm() {
  const [formData, setFormData] = useState<RSVPPayload>({
    fullName: '',
    phone: '',
    email: '',
    guests: 1,
    attendance: 'yes',
    message: '',
  });

  const [errors, setErrors] = useState<RSVPFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: RSVPFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.attendance) {
      newErrors.attendance = 'Please select your attendance status.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof RSVPFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const setAttendance = (status: 'yes' | 'no' | 'maybe') => {
    setFormData((prev) => ({ ...prev, attendance: status }));
    if (errors.attendance) {
      setErrors((prev) => ({ ...prev, attendance: undefined }));
    }
  };

  const setGuests = (count: number) => {
    const clamped = Math.max(1, Math.min(10, count));
    setFormData((prev) => ({ ...prev, guests: clamped }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await sendRSVPEmail(formData);
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      guests: 1,
      attendance: 'yes',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    setAttendance,
    setGuests,
    handleSubmit,
    handleReset,
  };
}
