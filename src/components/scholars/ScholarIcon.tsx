import type { LucideIcon } from "lucide-react";
import {
  Trophy,
  GraduationCap,
  FolderOpen,
  Target,
  PenLine,
  Banknote,
  Library,
  School,
  Compass,
  Stamp,
  Luggage,
  MessageCircle,
  TrendingUp,
  FileText,
  Send,
  PartyPopper,
  Globe,
  Heart,
  Unlock,
  Map,
  Gem,
  Scale,
  Plane,
} from "lucide-react";
import type { ScholarIconName } from "@/lib/scholar-icon-types";

const ICONS: Record<ScholarIconName, LucideIcon> = {
  trophy: Trophy,
  "graduation-cap": GraduationCap,
  "folder-open": FolderOpen,
  target: Target,
  "pen-line": PenLine,
  banknote: Banknote,
  library: Library,
  school: School,
  compass: Compass,
  stamp: Stamp,
  luggage: Luggage,
  "message-circle": MessageCircle,
  "trending-up": TrendingUp,
  "file-text": FileText,
  send: Send,
  "party-popper": PartyPopper,
  globe: Globe,
  heart: Heart,
  unlock: Unlock,
  map: Map,
  gem: Gem,
  scale: Scale,
  plane: Plane,
};

export function ScholarIcon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: ScholarIconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = ICONS[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />;
}
