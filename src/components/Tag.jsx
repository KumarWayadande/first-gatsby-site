import React from "react"
export default function Tag(prop) {
  return (
    <span className="bg-gray-100 cursor-pointer w-fit text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
      {prop.value}
    </span>
  )
}
