import * as privacy from "@/app/(site)/privacy-policy/content";
import * as refund from "@/app/(site)/refund-policy/content";
import * as terms from "@/app/(site)/terms-and-conditions/content";
import * as delivery from "@/app/(site)/delivery-policy/content";
import * as payment from "@/app/(site)/payment-security/content";

export const policies = [privacy, refund, terms, delivery, payment];
export const getPolicy = (slug: string) => policies.find((p) => p.policy.slug === slug);
