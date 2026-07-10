# DevDock interface polish

## Direction

DevDock will use a precise native-utility aesthetic with small editorial touches. The interface should feel closer to a carefully made desktop index than a generic SaaS landing page: a flat warm off-white canvas, dense but readable rows, sharp borders, a single cobalt brand anchor, monospace metadata, and no decorative patterns, gradients, oversized cards, or heavy dark bars. Each tool has a stable muted color used only in its icon tile; category badges and interactions stay neutral. Hover is tactile and visible, using a pronounced cool-gray highlight plus an ink rail and launch action.

The browser favicon reuses the geometric `D/` monogram in a cobalt rounded square. Its high-contrast, path-based construction remains legible at small tab sizes without depending on external fonts.

The information hierarchy is deliberately spare. A compact top bar establishes the product, followed directly by a prominent search control with a visible `/` keyboard hint. There is no promotional hero, explanatory footer, or redundant list header: the interface assumes its users came to open a tool. The directory is a single bordered surface with structured rows, explicit categories, and full-row links. This preserves the product principle that search and clear labels matter more than categories while still making each result easy to scan.

## Interaction and responsive behavior

Search filters names, descriptions, and categories. Pressing `/` focuses search from anywhere outside an editable control; Escape clears the query first, then releases focus. Every tool is one large semantic external link with a clear focus ring, and the empty state provides a direct reset action.

On wide screens, tool rows read like a compact index: number, icon, copy, category, and launch affordance. At tablet widths the category is removed before useful copy is compressed. On phones, row descriptions remain readable and touch targets remain at least 44 pixels tall. Motion is limited to short directional and color transitions and is disabled when reduced motion is requested.

The implementation keeps tool data separate from presentation and moves the icon renderer into its own focused component. Existing tool URLs and filtering behavior remain unchanged.
