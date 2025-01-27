"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { Props } from "./@types";
import { cn } from "@/app/utils/utils";
import { Skeleton } from "../../modules";
import { Text, Title } from "../../elements";

export const Card = ({ projects, className }: Props) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {projects.map((item, idx) => {
        return (
          <AnimatePresence key={item.id}>
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.4,
                delay: 0.04 + 0.25 + idx * 0.05,
              }}
            >
              <div
                key={item?.id}
                className="relative group block p-2 h-full w-full"
              >
                <div
                  className={cn(
                    "rounded-2xl h-full w-full min-h-[274px] min-w-[303px] overflow-hidden bg-black border border-slate-700 dark:border-white/[0.2] relative z-20",
                    className
                  )}
                >
                  <div className="relative z-50 h-full rounded-2xl overflow-hidden">
                    <div
                      className="flex flex-col justify-end p-4 h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${item.images[0].url})`,
                      }}
                    >
                      <button
                        className="bg-transparent flex justify-between items-center absolute p-[0.65rem] top-6 right-5 border-2 border-white rounded-[1.88rem] z-[1]"
                        onClick={() => router.push(`/projects/${item.id}`)}
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="#fff"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          className="bi bi-chevron-right"
                        >
                          <path d="M10.854 8l-4.646 4.646a.5.5 0 1 1-.708-.708L9.293 8 5.5 4.854a.5.5 0 1 1 .708-.708L10.854 8z" />
                        </svg>
                      </button>

                      {Boolean(item.slugs_primary.length) && (
                        <Skeleton slugs={item.slugs_primary} />
                      )}
                      <div className="flex w-full h-auto flex-wrap items-center justify-between relative z-[1]">
                        <div className="flex flex-col justify-start items-start w-auto h-auto gap-2">
                          <Title className="!text-xl !font-medium text-white">
                            {item.title}
                          </Title>
                          <Text className="font-light text-white">
                            {item.text}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};
