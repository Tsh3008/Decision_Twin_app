import { motion } from "framer-motion";

interface TreeNode {
  label: string;
  color: string;
  children?: TreeNode[];
}

const tree: TreeNode = {
  label: "Career Decision",
  color: "hsl(174,72%,56%)",
  children: [
    {
      label: "Data Science",
      color: "hsl(200,100%,60%)",
      children: [
        { label: "High Income ($120K+)", color: "hsl(174,72%,56%)" },
        { label: "AI/ML Research", color: "hsl(265,60%,55%)" },
        { label: "Moderate Stress", color: "hsl(200,100%,60%)" },
      ],
    },
    {
      label: "Software Engineering",
      color: "hsl(265,60%,55%)",
      children: [
        { label: "Stable Growth", color: "hsl(174,72%,56%)" },
        { label: "Remote Options", color: "hsl(200,100%,60%)" },
        { label: "Lower Risk", color: "hsl(265,60%,55%)" },
      ],
    },
    {
      label: "Product Management",
      color: "hsl(200,100%,60%)",
      children: [
        { label: "Leadership Path", color: "hsl(174,72%,56%)" },
        { label: "Cross-functional", color: "hsl(265,60%,55%)" },
      ],
    },
  ],
};

const NODE_W = 160;
const NODE_H = 44;

const MindMap = () => {
  const levelWidths = [1, tree.children?.length || 0];
  let maxLeaf = 0;
  tree.children?.forEach(c => { maxLeaf += c.children?.length || 1; });
  levelWidths.push(maxLeaf);

  // Simple layout
  const rootX = 500, rootY = 60;
  const l1Spacing = 220;
  const l1StartY = 180;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Mind Map Builder</h1>
        <p className="text-sm text-muted-foreground">Visualize your decision tree with AI-predicted outcomes.</p>
      </div>

      <div className="glass-card p-6 overflow-auto">
        <svg width="1050" height="520" className="mx-auto">
          {/* Root */}
          <MindNode x={rootX} y={rootY} label={tree.label} color={tree.color} glow />

          {tree.children?.map((child, ci) => {
            const cx = 160 + ci * 340;
            const cy = l1StartY;

            // Collect leaf positions
            const leaves = child.children || [];
            const leafStartY = 340;
            const leafSpacing = 60;

            return (
              <g key={ci}>
                {/* Line root -> child */}
                <line x1={rootX} y1={rootY + NODE_H} x2={cx} y2={cy} stroke={child.color} strokeWidth="1.5" strokeOpacity="0.4" />

                <MindNode x={cx} y={cy} label={child.label} color={child.color} />

                {leaves.map((leaf, li) => {
                  const lx = cx - ((leaves.length - 1) * leafSpacing) / 2 + li * leafSpacing;
                  const ly = leafStartY + (ci % 2 === 0 ? 0 : 40);

                  return (
                    <g key={li}>
                      <line x1={cx} y1={cy + NODE_H} x2={lx} y2={ly} stroke={leaf.color} strokeWidth="1" strokeOpacity="0.3" />
                      <MindNode x={lx} y={ly} label={leaf.label} color={leaf.color} small />
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {["Decision Point", "Possible Outcome", "Long Term Impact"].map((label, i) => (
          <div key={i} className="glass-card p-4 text-center">
            <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: ["hsl(174,72%,56%)", "hsl(200,100%,60%)", "hsl(265,60%,55%)"][i] }} />
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const MindNode = ({ x, y, label, color, glow, small }: { x: number; y: number; label: string; color: string; glow?: boolean; small?: boolean }) => {
  const w = small ? 130 : NODE_W;
  const h = small ? 36 : NODE_H;
  return (
    <g>
      {glow && <circle cx={x} cy={y + h / 2} r={40} fill={color} opacity={0.08} />}
      <rect
        x={x - w / 2} y={y} width={w} height={h} rx={8}
        fill="rgba(255,255,255,0.05)"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <text
        x={x} y={y + h / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize={small ? 10 : 12}
        fontFamily="Sora, sans-serif"
      >
        {label}
      </text>
    </g>
  );
};

export default MindMap;
