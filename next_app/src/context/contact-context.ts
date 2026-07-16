"use client";

import { Contact } from "@/types/contacts.models";
import { createContext, Dispatch, SetStateAction } from "react";

type COntactContextType = {
    contacts:Contact[],
    setContact: Dispatch<SetStateAction<Contact []>>
}

export const ContactContext = createContext<COntactContextType>({
    contacts:[],
    setContact: () => {},
});