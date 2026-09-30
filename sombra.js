const SEGMENTS = [
  { key: "segment-0", pathData: "M 0 240.2434011543014 L 141.22222222222223 240.2434011543014 L 141.22222222222223 659 L 0 659 Z" },
  { key: "segment-1", pathData: "M 141.22222222222223 171.7562598291944 L 282.44444444444446 171.7562598291944 L 282.44444444444446 659 L 141.22222222222223 659 Z" },
  { key: "segment-2", pathData: "M 282.44444444444446 108.62048245566587 L 423.6666666666667 108.62048245566587 L 423.6666666666667 659 L 282.44444444444446 659 Z" },
  { key: "segment-3", pathData: "M 423.6666666666667 52.894937751894076 L 564.8888888888889 52.894937751894076 L 564.8888888888889 659 L 423.6666666666667 659 Z" },
  { key: "segment-4", pathData: "M 564.8888888888889 11.980000000000018 L 738.5922222222223 11.980000000000018 L 738.5922222222223 659 L 564.8888888888889 659 Z" },
  { key: "segment-5", pathData: "M 738.5922222222223 52.894937751894076 L 879.8144444444445 52.894937751894076 L 879.8144444444445 659 L 738.5922222222223 659 Z" },
  { key: "segment-6", pathData: "M 879.8144444444445 108.62048245566587 L 1021.0366666666667 108.62048245566587 L 1021.0366666666667 659 L 879.8144444444445 659 Z" },
  { key: "segment-7", pathData: "M 1021.0366666666667 171.75625982919445 L 1162.258888888889 171.75625982919445 L 1162.258888888889 659 L 1021.0366666666667 659 Z" },
  { key: "segment-8", pathData: "M 1162.258888888889 240.2434011543014 L 1303.4811111111112 240.2434011543014 L 1303.4811111111112 659 L 1162.258888888889 659 Z" }
];

const BOUNDS = { minX: 0, minY: 11.980000000000018, maxX: 1303.4811111111112, maxY: 659 };
const STYLE = { durationMs: 1100, revealDistance: 0.65 };

const LAYERS = [
  {
    id: "mono-3",
    name: "Layer 04",
    ordinal: "04",
    color: "#fafafa",
    blur: 15,
    envelope: [
      { key: "lower-bound", offset: 0, opacity: 0 },
      { key: "from-mono-2-sample-0", offset: 76, opacity: 0 },
      { key: "from-mono-2-sample-4", offset: 76.09375, opacity: 0.021115955089018243 },
      { key: "from-mono-2-sample-8", offset: 76.1875, opacity: 0.040364948492156966 },
      { key: "from-mono-2-sample-12", offset: 76.28125, opacity: 0.05797355403092099 },
      { key: "from-mono-2-sample-16", offset: 76.375, opacity: 0.07413303800096901 },
      { key: "from-mono-2-sample-20", offset: 76.46875, opacity: 0.08900597823139467 },
      { key: "from-mono-2-sample-24", offset: 76.5625, opacity: 0.10273144790911289 },
      { key: "from-mono-2-sample-32", offset: 76.75, opacity: 0.1272025102582669 },
      { key: "from-mono-2-sample-40", offset: 76.9375, opacity: 0.1483252230907827 },
      { key: "from-mono-2-sample-48", offset: 77.125, opacity: 0.1666934576434657 },
      { key: "from-mono-2-sample-56", offset: 77.3125, opacity: 0.18276785600954512 },
      { key: "from-mono-2-sample-64", offset: 77.5, opacity: 0.1969111969111969 },
      { key: "from-mono-2-sample-72", offset: 77.6875, opacity: 0.20941306373141014 },
      { key: "from-mono-2-sample-80", offset: 77.875, opacity: 0.22050740887305983 },
      { key: "from-mono-2-sample-88", offset: 78.0625, opacity: 0.23038529173291775 },
      { key: "from-mono-2-sample-96", offset: 78.25, opacity: 0.23920426977195525 },
      { key: "from-mono-2-sample-112", offset: 78.625, opacity: 0.2541686963690185 },
      { key: "from-mono-2-sample-128", offset: 79, opacity: 0.26621923937360176 },
      { key: "from-mono-2-sample-144", offset: 79.375, opacity: 0.27594687653713723 },
      { key: "from-mono-2-sample-160", offset: 79.75, opacity: 0.2837887968344256 },
      { key: "from-mono-2-sample-176", offset: 80.125, opacity: 0.2900752187783533 },
      { key: "from-mono-2-sample-192", offset: 80.5, opacity: 0.2950600801068091 },
      { key: "from-mono-2-sample-224", offset: 81.25, opacity: 0.30187721968543885 },
      { key: "from-mono-2-sample-256", offset: 82, opacity: 0.30538922155688614 },
      { key: "from-mono-2-sample-288", offset: 82.75, opacity: 0.30634630451815104 },
      { key: "from-mono-2-sample-320", offset: 83.5, opacity: 0.30525628468821414 },
      { key: "from-mono-2-sample-352", offset: 84.25, opacity: 0.3024724639913734 },
      { key: "from-mono-2-sample-384", offset: 85, opacity: 0.2982456140350877 },
      { key: "from-mono-2-sample-416", offset: 85.75, opacity: 0.29275604824653134 },
      { key: "from-mono-2-sample-448", offset: 86.5, opacity: 0.2861341170184344 },
      { key: "from-mono-2-sample-512", offset: 88, opacity: 0.2698412698412698 },
      { key: "from-mono-2-sample-576", offset: 89.5, opacity: 0.24982505248425474 },
      { key: "from-mono-2-sample-640", offset: 91, opacity: 0.22626441881100265 },
      { key: "from-mono-2-sample-704", offset: 92.5, opacity: 0.19914802981895632 },
      { key: "from-mono-2-sample-768", offset: 94, opacity: 0.16831683168316833 },
      { key: "from-mono-2-sample-800", offset: 94.75, opacity: 0.15142260904972765 },
      { key: "from-mono-2-sample-832", offset: 95.5, opacity: 0.13348097443124626 },
      { key: "from-mono-2-sample-864", offset: 96.25, opacity: 0.11443530291697832 },
      { key: "from-mono-2-sample-896", offset: 97, opacity: 0.09422011084718919 },
      { key: "from-mono-2-sample-928", offset: 97.75, opacity: 0.07276036798347027 },
      { key: "from-mono-2-sample-960", offset: 98.5, opacity: 0.04997060552616106 },
      { key: "from-mono-2-sample-992", offset: 99.25, opacity: 0.025753799540634358 },
      { key: "from-mono-2-sample-1024", offset: 100, opacity: 0 }
    ]
  },
  {
    id: "mono-2",
    name: "Layer 03",
    ordinal: "03",
    color: "#d4d4d8",
    blur: 15,
    envelope: [
      { key: "lower-bound", offset: 0, opacity: 0 },
      { key: "from-mono-1-support", offset: 45, opacity: 0 },
      { key: "from-mono-1-sample-0", offset: 45.001, opacity: 0.85 },
      { key: "from-mono-1-sample-1", offset: 45.0302734375, opacity: 0.8695486007898768 },
      { key: "from-mono-1-sample-2", offset: 45.060546875, opacity: 0.869531979954141 },
      { key: "from-mono-1-sample-4", offset: 45.12109375, opacity: 0.869498725573492 },
      { key: "from-mono-1-sample-8", offset: 45.2421875, opacity: 0.8694321659299493 },
      { key: "from-mono-1-sample-16", offset: 45.484375, opacity: 0.8692988427501723 },
      { key: "from-mono-1-sample-32", offset: 45.96875, opacity: 0.8690313778990456 },
      { key: "from-mono-1-sample-64", offset: 46.9375, opacity: 0.8684931506849315 },
      { key: "from-mono-1-sample-128", offset: 48.875, opacity: 0.8674033149171266 },
      { key: "from-mono-1-sample-256", offset: 52.75, opacity: 0.8651685393258428 },
      { key: "from-mono-1-sample-512", offset: 60.5, opacity: 0.8604651162790699 },
      { key: "from-mono-1-sample-1024", offset: 76, opacity: 0.85 },
      { key: "to-mono-3-sample-32", offset: 76.75, opacity: 0.7977050781249999 },
      { key: "to-mono-3-sample-64", offset: 77.5, opacity: 0.7470703125 },
      { key: "to-mono-3-sample-96", offset: 78.25, opacity: 0.6980957031249999 },
      { key: "to-mono-3-sample-128", offset: 79, opacity: 0.65078125 },
      { key: "to-mono-3-sample-160", offset: 79.75, opacity: 0.605126953125 },
      { key: "to-mono-3-sample-192", offset: 80.5, opacity: 0.5611328125 },
      { key: "to-mono-3-sample-224", offset: 81.25, opacity: 0.518798828125 },
      { key: "to-mono-3-sample-256", offset: 82, opacity: 0.47812499999999997 },
      { key: "to-mono-3-sample-288", offset: 82.75, opacity: 0.43911132812500003 },
      { key: "to-mono-3-sample-320", offset: 83.5, opacity: 0.4017578125 },
      { key: "to-mono-3-sample-352", offset: 84.25, opacity: 0.366064453125 },
      { key: "to-mono-3-sample-384", offset: 85, opacity: 0.33203125 },
      { key: "to-mono-3-sample-416", offset: 85.75, opacity: 0.29965820312499997 },
      { key: "to-mono-3-sample-448", offset: 86.5, opacity: 0.2689453125 },
      { key: "to-mono-3-sample-480", offset: 87.25, opacity: 0.23989257812499998 },
      { key: "to-mono-3-sample-512", offset: 88, opacity: 0.2125 },
      { key: "to-mono-3-sample-544", offset: 88.75, opacity: 0.186767578125 },
      { key: "to-mono-3-sample-576", offset: 89.5, opacity: 0.1626953125 },
      { key: "to-mono-3-sample-608", offset: 90.25, opacity: 0.140283203125 },
      { key: "to-mono-3-sample-640", offset: 91, opacity: 0.11953124999999999 },
      { key: "to-mono-3-sample-672", offset: 91.75, opacity: 0.10043945312500002 },
      { key: "to-mono-3-sample-704", offset: 92.5, opacity: 0.0830078125 },
      { key: "to-mono-3-sample-736", offset: 93.25, opacity: 0.067236328125 },
      { key: "to-mono-3-sample-768", offset: 94, opacity: 0.053125000000000006 },
      { key: "to-mono-3-sample-800", offset: 94.75, opacity: 0.04067382812499999 },
      { key: "to-mono-3-sample-832", offset: 95.5, opacity: 0.02988281250000001 },
      { key: "to-mono-3-sample-864", offset: 96.25, opacity: 0.020751953125 },
      { key: "to-mono-3-sample-896", offset: 97, opacity: 0.013281249999999994 },
      { key: "to-mono-3-sample-928", offset: 97.75, opacity: 0.007470703125000002 },
      { key: "to-mono-3-sample-960", offset: 98.5, opacity: 0.0033203124999999986 },
      { key: "to-mono-3-sample-992", offset: 99.25, opacity: 0.0008300781250000014 },
      { key: "to-mono-3-sample-1024", offset: 100, opacity: 0 }
    ]
  },
  {
    id: "mono-1",
    name: "Layer 02",
    ordinal: "02",
    color: "#52525b",
    blur: 15,
    envelope: [
      { key: "from-mono-0-support", offset: 0, opacity: 0 },
      { key: "from-mono-0-sample-0", offset: 0.001, opacity: 1 },
      { key: "from-mono-0-sample-1024", offset: 45, opacity: 1 },
      { key: "to-mono-2-sample-64", offset: 46.9375, opacity: 0.9287109375 },
      { key: "to-mono-2-sample-128", offset: 48.875, opacity: 0.8585937499999999 },
      { key: "to-mono-2-sample-192", offset: 50.8125, opacity: 0.7896484375 },
      { key: "to-mono-2-sample-256", offset: 52.75, opacity: 0.721875 },
      { key: "to-mono-2-sample-320", offset: 54.6875, opacity: 0.6552734375 },
      { key: "to-mono-2-sample-384", offset: 56.625, opacity: 0.58984375 },
      { key: "to-mono-2-sample-448", offset: 58.5625, opacity: 0.5255859374999999 },
      { key: "to-mono-2-sample-512", offset: 60.5, opacity: 0.4625 },
      { key: "to-mono-2-sample-576", offset: 62.4375, opacity: 0.4005859375 },
      { key: "to-mono-2-sample-640", offset: 64.375, opacity: 0.33984375 },
      { key: "to-mono-2-sample-704", offset: 66.3125, opacity: 0.2802734375 },
      { key: "to-mono-2-sample-768", offset: 68.25, opacity: 0.221875 },
      { key: "to-mono-2-sample-832", offset: 70.1875, opacity: 0.16464843750000002 },
      { key: "to-mono-2-sample-896", offset: 72.125, opacity: 0.10859374999999999 },
      { key: "to-mono-2-sample-960", offset: 74.0625, opacity: 0.0537109375 },
      { key: "to-mono-2-sample-1024", offset: 76, opacity: 0 },
      { key: "upper-bound", offset: 100, opacity: 0 }
    ]
  },
  {
    id: "mono-0",
    name: "Layer 01",
    ordinal: "01",
    color: "#09090b",
    blur: 15,
    envelope: [
      { key: "lower-bound", offset: 0, opacity: 1 },
      { key: "to-mono-1-sample-1024", offset: 45, opacity: 0 },
      { key: "upper-bound", offset: 100, opacity: 0 }
    ]
  }
];

const NS = "http://www.w3.org/2000/svg";

function svg(name, attrs) {
  const node = document.createElementNS(NS, name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
  return node;
}

function mount(root, instanceId) {
  const layerEls = {};
  const image = svg("svg", {
    viewBox: "0 0 1271 599",
    preserveAspectRatio: "none",
    fill: "none",
    width: "100%",
    height: "100%"
  });
  const defs = svg("defs", {});
  LAYERS.forEach((layer) => {
    const prefix = `sombra-${instanceId}-layer-${layer.ordinal}`;
    const gradientId = `${prefix}-fill`;
    const filterId = `${prefix}-blur`;
    const padding = layer.blur * 4;
    const gradient = svg("linearGradient", {
      id: gradientId,
      gradientUnits: "objectBoundingBox",
      x1: "0",
      y1: "1",
      x2: "0",
      y2: "0"
    });
    layer.envelope.forEach((stop) => {
      gradient.append(svg("stop", {
        "data-gradient-stop-key": `${layer.id}:${stop.key}`,
        offset: `${stop.offset}%`,
        "stop-color": layer.color,
        "stop-opacity": stop.opacity
      }));
    });
    const filter = svg("filter", {
      id: filterId,
      "data-gradient-layer-filter": layer.id,
      filterUnits: "userSpaceOnUse",
      x: BOUNDS.minX - padding,
      y: BOUNDS.minY - padding,
      width: BOUNDS.maxX - BOUNDS.minX + padding * 2,
      height: BOUNDS.maxY - BOUNDS.minY + padding * 2
    });
    filter.append(svg("feGaussianBlur", { stdDeviation: layer.blur }));
    defs.append(gradient, filter);
  });
  image.append(defs);

  LAYERS.forEach((layer) => {
    const prefix = `sombra-${instanceId}-layer-${layer.ordinal}`;
    const gradientId = `${prefix}-fill`;
    const filterId = `${prefix}-blur`;
    const group = svg("g", {
      id: prefix,
      "data-name": layer.name,
      "data-gradient-layer": layer.id,
      "data-sombra-layer-id": layer.id,
      "data-gradient-id": gradientId,
      "data-filter-id": filterId
    });
    group.style.pointerEvents = "none";
    group.style.transformBox = "view-box";
    group.style.transformOrigin = "50% 100%";
    group.style.transform = "scaleY(0)";
    const artwork = svg("g", {
      id: `${prefix}-artwork`,
      "data-name": "Artwork",
      "data-gradient-artwork": "",
      fill: `url(#${gradientId})`,
      filter: `url(#${filterId})`,
      opacity: "1"
    });
    SEGMENTS.forEach((segment, index) => {
      const ordinal = String(index + 1).padStart(2, "0");
      artwork.append(svg("path", {
        id: `${prefix}-segment-${ordinal}`,
        "data-name": `Segment ${ordinal}`,
        "data-gradient-segment": segment.key,
        d: segment.pathData
      }));
    });
    group.append(artwork);
    image.append(group);
    layerEls[layer.id] = group;
  });
  root.append(image);
  return layerEls;
}

function play(layerEls) {
  let mediaQuery = null;
  try {
    mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  } catch (error) {
    mediaQuery = null;
  }
  let firstFrame = null;
  let secondFrame = null;
  let timers = [];

  function clearScheduled() {
    if (firstFrame !== null) cancelAnimationFrame(firstFrame);
    if (secondFrame !== null) cancelAnimationFrame(secondFrame);
    timers.forEach((timer) => clearTimeout(timer));
    firstFrame = null;
    secondFrame = null;
    timers = [];
  }
  function complete() {
    clearScheduled();
    LAYERS.forEach((layer) => {
      const element = layerEls[layer.id];
      if (!element) return;
      element.style.transition = "";
      element.style.transform = "scaleY(1)";
      element.style.willChange = "";
    });
  }
  function start() {
    clearScheduled();
    if (!mediaQuery || mediaQuery.matches) {
      complete();
      return;
    }
    LAYERS.forEach((layer) => {
      const element = layerEls[layer.id];
      if (!element) return;
      element.style.transition = "";
      element.style.transform = "scaleY(0)";
      element.style.willChange = "transform";
    });
    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        LAYERS.forEach((layer) => {
          const element = layerEls[layer.id];
          if (!element) return;
          element.style.transition = `transform ${STYLE.durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`;
          element.style.transform = "scaleY(1)";
          timers.push(setTimeout(() => {
            element.style.transition = "";
            element.style.willChange = "";
          }, STYLE.durationMs));
        });
      });
    });
  }

  if (!mediaQuery) {
    complete();
    return;
  }
  mediaQuery.addEventListener("change", start);
  start();
}

document.querySelectorAll(".sombra").forEach((root, index) => {
  play(mount(root, "wantic" + index));
});
