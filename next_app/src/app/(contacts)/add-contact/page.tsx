"use client";

import AddContactForm from "@/components/add-contact-form";
import Navbar from "@/components/navbar";
import React from "react";
import Router from "next/router";

type Props = {}

export default function page({}: Props) {
  return (
    <div>
      <h1>Ajouter un contact</h1>
      <AddContactForm />
    </div>
  )
}