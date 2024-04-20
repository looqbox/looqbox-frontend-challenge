import { LucideIcon } from 'lucide-react';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

type PokemonAttributeProps = {
  name: string;
  icon: LucideIcon;
  value: string;
};

export function PokemonAttribute({
  name,
  icon: Icon,
  value,
}: PokemonAttributeProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label
        htmlFor="name"
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        <Icon className="h-4 w-4" /> {name}
      </Label>
      <Input
        id={name}
        value={value}
        disabled
        className="disabled:opacity-1 disabled:pointer-events-none"
      />
    </div>
  );
}
