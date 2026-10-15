import type { ReactNode } from "react";

export interface NavItem {
    label: string;
    href: string;
}

export interface BenefitItem {
    id: number;
    icon: string;
    title: string;
    description: string;
    iconAlt: string;
}

export interface SectionHeaderProps {
    subTitle: string;
    title: string;
    description: string;
    className?: string;

}

export interface TestimonialItem {
    id: number;
    name: string;
    image: string;
    description: string;
}

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}



export interface FooterLinkGroup {
    id: string;
    title: string;
    links: {
        id: string;
        label: string;
        href: string;
    }[];
}

export interface FooterContactItem {
    id: string;
    text: string;
    href: string;
    icon: ReactNode;
}

export interface FooterSocialItem {
    id: string;
    label: string;
    href: string;
    icon: ReactNode;
}

export interface OurPageItem {
    id: number;
    title: string;
    description: string;

}

export interface HeroStat {
    id: number;
    value: string;
    label: string;
}
