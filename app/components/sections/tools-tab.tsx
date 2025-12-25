"use client";

import type React from "react";
import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";

import {
  CodeGeneratorIcon,
  EmailGeneratorIcon,
  ImageGeneratorIcon,
  TextGeneratorIcon,
  VideoGeneratorIcon,
} from "../icons/icons";

// Define the tab type
interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  contents?: Content[];
}

interface Content {
  title: string;
  description: string;
}

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState("1");

  // Tab Data
  const tabs: Tab[] = [
    {
      id: "1",
      label: "Materi 1",
      icon: <TextGeneratorIcon className="w-8 h-8" />,
      title: "Materi 1: Pengertian Formalisasi UMKM",
      description:
        "Materi ini membahas pengertian, tujuan, dan ruang lingkup formalisasi UMKM.",
      contents: [
        {
          title: "Pengertian Formalisasi UMKM",
          description: `
      Formalisasi UMKM adalah proses pengakuan usaha secara resmi oleh negara melalui pemenuhan aspek legalitas, administrasi, dan perizinan usaha. 
      Proses ini bertujuan agar usaha yang dijalankan memiliki status hukum yang jelas, terlindungi secara hukum, serta dapat berpartisipasi secara legal dalam kegiatan ekonomi nasional.<br><br>

      Formalisasi UMKM mencakup kepemilikan identitas usaha, perizinan, dan pencatatan administratif sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.<br><br>

      <b>1. Legalitas Usaha:</b><br>
      Meliputi kepemilikan Nomor Induk Berusaha (NIB), izin usaha, dan dokumen pendukung lainnya sebagai bukti bahwa usaha telah terdaftar secara resmi.<br><br>

      <b>2. Administrasi Usaha:</b><br>
      Berkaitan dengan pencatatan usaha, seperti data pemilik, alamat usaha, jenis kegiatan usaha, serta pencatatan keuangan dasar.<br><br>

      <b>3. Kepatuhan Regulasi:</b><br>
      UMKM yang terformalisasi wajib menjalankan usaha sesuai dengan aturan yang berlaku, termasuk ketentuan perpajakan, ketenagakerjaan, dan standar usaha.
      `,
        },
        {
          title: "Tujuan Formalisasi UMKM",
          description: `
      Formalisasi UMKM bertujuan untuk meningkatkan perlindungan hukum bagi pelaku usaha serta membuka akses yang lebih luas terhadap berbagai fasilitas pendukung usaha.<br><br>

      Beberapa tujuan utama formalisasi UMKM antara lain:<br>
      - Memberikan kepastian dan perlindungan hukum bagi pelaku usaha.<br>
      - Mempermudah akses pembiayaan, seperti kredit perbankan dan bantuan pemerintah.<br>
      - Meningkatkan kepercayaan konsumen dan mitra usaha.<br>
      - Mendorong UMKM naik kelas dan berdaya saing.
      `,
        },
        {
          title: "Manfaat Formalisasi UMKM",
          description: `
      Dengan melakukan formalisasi, UMKM memperoleh berbagai manfaat strategis yang mendukung keberlanjutan usaha.<br><br>

      Manfaat formalisasi UMKM meliputi:<br>
      - Usaha diakui secara hukum dan terlindungi dari risiko sengketa.<br>
      - Kemudahan dalam mengikuti program pemerintah dan pengadaan barang/jasa.<br>
      - Akses pasar yang lebih luas, termasuk kerja sama dengan perusahaan besar.<br>
      - Peningkatan profesionalisme dan tata kelola usaha.
      `,
        },
      ],
    },

    {
      id: "reduce",
      label: "Materi 2",
      icon: <ImageGeneratorIcon className="w-8 h-8" />,
      title: "Create stunning images with AI",
      description:
        "Unlock the Potential of Innovation. Discover AI for images.",
      contents: [
        {
          title: "Image Generation Overview",
          description:
            "Image generation menggunakan neural networks seperti GAN & VAE untuk menghasilkan visual realistis maupun kreatif berdasarkan prompt.",
        },
      ],
    },
    {
      id: "reuse",
      label: "Materi 3",
      icon: <CodeGeneratorIcon className="w-8 h-8" />,
      title: "Generate code in any language",
      description:
        "Unlock the Potential of Innovation. Discover AI tools for code.",
    },
    {
      id: "recycle",
      label: "Materi 4",
      icon: <VideoGeneratorIcon className="w-8 h-8" />,
      title: "Create engaging videos with AI",
      description:
        "Unlock the Potential of Innovation. Discover AI video automation.",
    },
    {
      id: "dampak_lingkungan",
      label: "Materi 5",
      icon: <EmailGeneratorIcon className="w-8 h-8" />,
      title: "Write professional emails instantly",
      description: "AI email drafting tools for productivity.",
    },
    {
      id: "peran_masyarakat",
      label: "Materi 6",
      icon: <EmailGeneratorIcon className="w-8 h-8" />,
      title: "Peran Masyarakat",
      description:
        "Materi tentang kontribusi masyarakat dalam konteks syariah.",
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-14 md:py-28 dark:bg-gray-900">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h4 className="mb-3 font-bold text-gray-800 dark:text-white/90 text-2xl md:text-title-lg">
            {/* Yuk check dan baca materinya! */}
          </h4>
        </div>

        <div className="max-w-[1800px] w-full mx-auto px-0 sm:px-2">
          {/* TAB BUTTONS */}
          <div className="overflow-x-auto custom-scrollbar mx-auto max-w-fit relative mb-6">
            <div
              className="
      flex gap-2 min-w-max rounded-full
      bg-primary-50/40 dark:bg-primary-800/20
      p-1 backdrop-blur-md
      border border-primary-200/40 dark:border-primary-700/30
      shadow-sm transition-colors
    "
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200
          ${
            activeTab === tab.id
              ? "bg-white/60 dark:bg-primary-700/60 text-primary-800 dark:text-white backdrop-blur-md shadow-md border border-primary-300/40 dark:border-primary-600"
              : "text-gray-600 dark:text-gray-300 bg-transparent hover:bg-white/20 hover:dark:bg-white/5"
          }
        `}
                >
                  {tab.icon}
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TITLE + DESC */}
          <div className="mt-6 text-center">
            <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90">
              {currentTab.title}
            </h2>
            <p className="max-w-3xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">
              {currentTab.description}
            </p>
          </div>

          {/* ACCORDION */}
          <div className=" pb-2 pt-2 px-0 overflow-hidden rounded-3xl mt-0 bg-[rgba(43,140,231,0.10)] dark:bg-[rgba(43,140,231,0.12)] backdrop-blur-sm">
            <div className="p-0">
              {currentTab.contents && currentTab.contents.length > 0 ? (
                <Accordion
                  variant="shadow"
                  // className="w-full space-y-2"
                  className="space-y-1 border-none !border-0 !outline-none !divide-y-0"
                  itemClasses={{
                    base: "ai-accordion-item",
                    // base: "ai-accordion-item border-transparent",
                    title: "ai-accordion-title",
                    trigger: "ai-accordion-trigger",
                    content: "ai-accordion-content",
                    indicator: "ai-ac/cordion-indicator",
                  }}
                >
                  {currentTab.contents.map((content, index) => (
                    <AccordionItem
                      key={index}
                      aria-label={`Accordion ${index + 1}`}
                      title={content.title}
                      className="ai-accordion-item"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.description,
                        }}
                      />
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-gray-500">{currentTab.description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
