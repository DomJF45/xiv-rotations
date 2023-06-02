import { iPost, iPostRotation } from "./types";

const rotation1: iPostRotation = {
  job: "Paladin",
  skills: [
    {
      id: "1iCh2dafJpbk9GMKk5Sdf",
      skill: {
        c: "28",
        cast_range: 0,
        cast_time: 0,
        category: 4,
        cost: 0,
        deprecated: null,
        gcd: false,
        help_html:
          "Significantly increases enmity generation.<br/>Effect ends upon reuse.",
        icon: "s2",
        level: 10,
        name: "Iron Will",
        radius: 0,
      },
    },
    {
      id: "SW0BCzffehumphdU2K3du",
      skill: {
        c: "9",
        cast_range: 3,
        cast_time: 0,
        category: 3,
        cost: 0,
        deprecated: null,
        gcd: true,
        help_html: "Delivers an attack with a potency of 200.",
        icon: "s9",
        level: 1,
        name: "Fast Blade",
        radius: 0,
      },
    },
    {
      id: "eSrIeYXLbECs4o6833mq-",
      skill: {
        name: "Sentinel",
        icon: "s17",
        level: 38,
        help_html:
          'Reduces damage taken by 30%.<br/><em class="lime">Duration</em>: 15s',
        cast_time: 0,
        cast_range: 0,
        cost: 0,
        category: 0,
        radius: 0,
        deprecated: null,
        c: "",
        gcd: false,
      },
    },
  ],
  type: "PVE",
};

const rotation2: iPostRotation = {
  job: "Dark Knight",
  skills: [
    {
      id: "37nXXBNtv_koi8fLbI8NA",
      skill: {
        c: "16466",
        cast_range: 10,
        cast_time: 0,
        category: 4,
        cost: 3000,
        deprecated: null,
        gcd: false,
        help_html:
          'Deals unaspected damage with a potency of 100 to all enemies in a straight line before you.<br/><em class="lime">Additional Effect</em>: Grants Darkside, increasing damage dealt by 10%<br/><em class="lime">Duration</em>: 30s<br/>Extends Darkside duration by 30s to a maximum of 60s.<br/>Shares a recast timer with Edge of Darkness.',
        icon: "s310",
        level: 30,
        name: "Flood of Darkness",
        radius: 10,
      },
    },
    {
      id: "5LwXKVbNoRowkTL8IlWU2",
      skill: {
        c: "16467",
        cast_range: 3,
        cast_time: 0,
        category: 4,
        cost: 3000,
        deprecated: null,
        gcd: false,
        help_html:
          'Deals unaspected damage with a potency of 300.<br/><em class="lime">Additional Effect</em>: Grants Darkside, increasing damage dealt by 10%<br/><em class="lime">Duration</em>: 30s<br/>Extends Darkside duration by 30s to a maximum of 60s.<br/>Shares a recast timer with Flood of Darkness.',
        icon: "s311",
        level: 40,
        name: "Edge of Darkness",
        radius: 0,
      },
    },
    {
      id: "sVhDyCIHvB_VLU4WxeUda",
      skill: {
        c: "16468",
        cast_range: 0,
        cast_time: 0,
        category: 2,
        cost: 0,
        deprecated: null,
        gcd: true,
        help_html:
          'Deals unaspected damage with a potency of 100 to all nearby enemies.<br/><em class="lime">Combo Action</em>: Unleash<br/><em class="lime">Combo Potency</em>: 140<br/><em class="lime">Combo Bonus</em>: Restores MP<br/><em class="lime">Combo Bonus</em>: Increases Blood Gauge by 20',
        icon: "s312",
        level: 40,
        name: "Stalwart Soul",
        radius: 5,
      },
    },
    {
      id: "MSvfZkt3nw2QO1qCNd7y0",
      skill: {
        c: "16469",
        cast_range: 10,
        cast_time: 0,
        category: 4,
        cost: 3000,
        deprecated: null,
        gcd: false,
        help_html:
          'Deals unaspected damage with a potency of 160 to all enemies in a straight line before you.<br/><em class="lime">Additional Effect</em>: Grants Darkside, increasing damage dealt by 10%<br/><em class="lime">Duration</em>: 30s<br/>Extends Darkside duration by 30s to a maximum of 60s.<br/>Shares a recast timer with Edge of Shadow.',
        icon: "s313",
        level: 74,
        name: "Flood of Shadow",
        radius: 10,
      },
    },
    {
      id: "yq9bMTwSFsQPlwitxYScq",
      skill: {
        c: "16470",
        cast_range: 3,
        cast_time: 0,
        category: 4,
        cost: 3000,
        deprecated: null,
        gcd: false,
        help_html:
          'Deals unaspected damage with a potency of 460.<br/><em class="lime">Additional Effect</em>: Grants Darkside, increasing damage dealt by 10%<br/><em class="lime">Duration</em>: 30s<br/>Extends Darkside duration by 30s to a maximum of 60s.<br/>Shares a recast timer with Flood of Shadow.',
        icon: "s314",
        level: 74,
        name: "Edge of Shadow",
        radius: 0,
      },
    },
  ],
  type: "PVE",
};

const rotation3: iPostRotation = {
  job: "Black Mage",
  skills: [
    {
      id: "NSndmTjjJzzXGjp3iQ8TY",
      skill: {
        c: "141",
        cast_range: 25,
        cast_time: 2.5,
        category: 2,
        cost: 800,
        deprecated: null,
        gcd: true,
        help_html:
          'Deals fire damage with a potency of 180.<br/><em class="lime">Additional Effect</em>: Grants Astral Fire or removes Umbral Ice<br/><em class="lime">Duration</em>: 15s<br/><em class="lime">Additional Effect</em>: 40% chance next Fire III will cost no MP and have no cast time<br/><em class="lime">Duration</em>: 30s',
        icon: "s141",
        level: 2,
        name: "Fire",
        radius: 0,
        recast_time: 2.5,
      },
    },
    {
      id: "MKZHeP9J9l2HDEn7C6UMY",
      skill: {
        c: "142",
        cast_range: 25,
        cast_time: 2.5,
        category: 2,
        cost: 400,
        deprecated: null,
        gcd: true,
        help_html:
          'Deals ice damage with a potency of 180.<br/><em class="lime">Additional Effect</em>: Grants Umbral Ice or removes Astral Fire<br/><em class="lime">Duration</em>: 15s',
        icon: "s142",
        level: 1,
        name: "Blizzard",
        radius: 0,
        recast_time: 2.5,
      },
    },
    {
      id: "1srSwj1JULzPpApjaoF7s",
      skill: {
        c: "147",
        cast_range: 25,
        cast_time: 3,
        category: 2,
        cost: 1500,
        deprecated: null,
        gcd: true,
        help_html:
          'Deals fire damage with a potency of 100 to target and all enemies nearby it.<br/><em class="lime">Additional Effect</em>: Grants Astral Fire III or removes Umbral Ice<br/><em class="lime">Duration</em>: 15s<br/><em class="lime">Astral Fire Bonus</em>: Grants Enhanced Flare<br/>Effect is canceled if Astral Fire ends.',
        icon: "s147",
        level: 18,
        name: "Fire II",
        radius: 5,
        recast_time: 2.5,
      },
    },
    {
      id: "LGhjmw4W2hisXEwzExYyN",
      skill: {
        c: "147",
        cast_range: 25,
        cast_time: 3,
        category: 2,
        cost: 1500,
        deprecated: null,
        gcd: true,
        help_html:
          'Deals fire damage with a potency of 100 to target and all enemies nearby it.<br/><em class="lime">Additional Effect</em>: Grants Astral Fire III or removes Umbral Ice<br/><em class="lime">Duration</em>: 15s<br/><em class="lime">Astral Fire Bonus</em>: Grants Enhanced Flare<br/>Effect is canceled if Astral Fire ends.',
        icon: "s147",
        level: 18,
        name: "Fire II",
        radius: 5,
        recast_time: 2.5,
      },
    },
  ],
  type: "PVE",
};

export const mockRotations: iPost[] = [
  {
    id: "32-j",
    postedBy: "John",
    likes: 23,
    viewedBy: 99,
    saved: 50,
    rotation: rotation1,
  },
  {
    id: "33-j",
    postedBy: "Balsac",
    likes: 3,
    viewedBy: 10,
    saved: 0,
    rotation: rotation3,
  },
  {
    id: "34-j",
    postedBy: "Asmon",
    likes: 3321,
    viewedBy: 5543,
    saved: 1345,
    rotation: rotation2,
  },
];
