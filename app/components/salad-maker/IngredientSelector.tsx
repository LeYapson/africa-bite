'use client';

interface IngredientSelectorProps {
  title: string;
  options: string[];
  selectedValue: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  required?: boolean;
}

export default function IngredientSelector({
  title,
  options,
  selectedValue,
  onChange,
  multiple = false,
  required = false
}: IngredientSelectorProps) {
  const handleToggle = (option: string) => {
    if (multiple) {
      const selected = selectedValue as string[];
      if (selected.includes(option)) {
        onChange(selected.filter(item => item !== option));
      } else {
        if (selected.length < 5) {
          onChange([...selected, option]);
        } else {
          alert("Vous pouvez sélectionner maximum 5 options");
        }
      }
    } else {
      onChange(option);
    }
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {options.map(option => (
          <label
            key={option}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              multiple
                ? (selectedValue as string[]).includes(option) ? 'bg-foreground text-background' : ''
                : selectedValue === option ? 'bg-foreground text-background' : ''
            }`}
          >
            <input
              type={multiple ? "checkbox" : "radio"}
              name={title.toLowerCase().replace(/\s+/g, '-')}
              value={option}
              checked={multiple ? (selectedValue as string[]).includes(option) : selectedValue === option}
              onChange={() => handleToggle(option)}
              className="sr-only"
              required={required && !multiple}
            />
            {option}
          </label>
        ))}
      </div>
    </section>
  );
}