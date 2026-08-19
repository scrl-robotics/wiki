// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  wikiSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: ['getting-started/welcome', 'getting-started/what-is-a-beetleweight', 'getting-started/safety', 'getting-started/rules'],
    },
    {
      type: 'category',
      label: 'Robot Design',
      collapsible: true,
      collapsed: false,
      items: ['robot-design/archetypes', 'robot-design/ground-game', 'robot-design/materials', 'robot-design/construction'],
    },
    {
      type: 'category',
      label: 'Drive Systems',
      collapsible: true,
      collapsed: false,
      items: ['drive-systems/drive-systems', 'drive-systems/wheels-and-hubs', 'drive-systems/weapon-design', 'drive-systems/weapon-stacks'],
    },
    {
      type: 'category',
      label: 'Manufacturing',
      collapsible: true,
      collapsed: false,
      items: ['manufacturing/manufacturing', 'manufacturing/3d-printing'],
    },
    {
      type: 'category',
      label: 'Electronics',
      collapsible: true,
      collapsed: false,
      items: ['electronics/electronics-and-wiring', 'electronics/programming-escs', 'electronics/control-systems'],
    },
    {
      type: 'category',
      label: 'Testing & Safety',
      collapsible: true,
      collapsed: false,
      items: ['testing-and-safety/testing-and-safety', 'testing-and-safety/competitions'],
    },
    {
      type: 'category',
      label: 'Appendices',
      collapsible: true,
      collapsed: true,
      items: [
        'appendices/casting-wheels',
        'appendices/bending-titanium',
        'appendices/threadlockers',
        'appendices/brushed-motor-noise',
        'appendices/am32-troubleshooting',
        'appendices/throttle-curves',
        'appendices/weight-management',
      ],
    },
  ],
};

export default sidebars;