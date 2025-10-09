import React from "react";
import { BuilderComponent, builder } from "@builder.io/react";

builder.init("YOUR_BUILDER_PUBLIC_API_KEY");

export default function AboutPage() {
  return <BuilderComponent model="page" name="About" />;
}
