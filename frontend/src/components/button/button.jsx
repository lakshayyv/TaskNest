import clsx from "clsx"

export default function Button({ label, className }) {
    return (
        <button type="submit" className={clsx("bg-yellow-500 px-7 py-2 rounded-lg", className)}>
          {label}
        </button>
    )
}