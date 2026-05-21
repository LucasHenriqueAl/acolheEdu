type ToggleProps = {
  id?: string
}

export default function Toggle({
  id = 'toggle'
}: ToggleProps) {
  return (
    <label
      htmlFor={id}
      className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-[:checked]:bg-blue-500"
    >
      <input
        type="checkbox"
        id={id}
        className="peer sr-only"
      />

      <span
        className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-white ring-inset transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
      />
    </label>
  )
}