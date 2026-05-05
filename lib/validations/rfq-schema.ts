import { z } from "zod";

const industryEnum = z.enum([
  "breweries",
  "manufacturing",
  "transport-logistics",
  "sales-distribution",
]);

const productCategoryEnum = z.enum([
  "equipment",
  "accessories",
  "spare-parts",
  "tools",
  "systems",
  "it-hardware-software",
  "branded-consumables",
]);

const timelineEnum = z.enum([
  "urgent",
  "1-3-months",
  "3-6-months",
  "planning",
]);

const budgetRangeEnum = z.enum([
  "under-5k",
  "5k-25k",
  "25k-100k",
  "100k-500k",
  "over-500k",
]);

export const rfqStep1Schema = z.object({
  industry: industryEnum,
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  country: z.string().min(2, "Country is required"),
});

export const rfqStep2Schema = z.object({
  productCategory: productCategoryEnum,
  itemDescription: z
    .string()
    .min(10, "Please describe the items you need (minimum 10 characters)"),
  estimatedQuantity: z.string().min(1, "Estimated quantity is required"),
  timeline: timelineEnum,
  budgetRange: budgetRangeEnum.optional(),
});

export const rfqStep3Schema = z.object({
  additionalNotes: z.string().optional(),
  consent: z.literal(true, {
    error: "You must consent to being contacted regarding this enquiry",
  }),
});

export const rfqSchema = rfqStep1Schema.merge(rfqStep2Schema).merge(rfqStep3Schema);

export type RFQStep1 = z.infer<typeof rfqStep1Schema>;
export type RFQStep2 = z.infer<typeof rfqStep2Schema>;
export type RFQStep3 = z.infer<typeof rfqStep3Schema>;
export type RFQFormData = z.infer<typeof rfqSchema>;
