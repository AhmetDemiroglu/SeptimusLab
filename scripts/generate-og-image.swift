import AppKit

let canvasWidth: CGFloat = 1200
let canvasHeight: CGFloat = 630

func color(_ red: CGFloat, _ green: CGFloat, _ blue: CGFloat, _ alpha: CGFloat = 1) -> NSColor {
    NSColor(
        calibratedRed: red / 255,
        green: green / 255,
        blue: blue / 255,
        alpha: alpha
    )
}

func font(_ name: String, size: CGFloat, fallbackWeight: NSFont.Weight) -> NSFont {
    NSFont(name: name, size: size) ?? NSFont.systemFont(ofSize: size, weight: fallbackWeight)
}

func drawText(
    _ text: String,
    x: CGFloat,
    top: CGFloat,
    width: CGFloat,
    font: NSFont,
    color: NSColor,
    lineHeight: CGFloat? = nil
) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.lineBreakMode = .byWordWrapping
    paragraph.minimumLineHeight = lineHeight ?? font.pointSize * 1.15
    paragraph.maximumLineHeight = lineHeight ?? font.pointSize * 1.15

    let attributes: [NSAttributedString.Key: Any] = [
        .font: font,
        .foregroundColor: color,
        .paragraphStyle: paragraph,
    ]
    let attributed = NSAttributedString(string: text, attributes: attributes)
    let measured = attributed.boundingRect(
        with: NSSize(width: width, height: canvasHeight),
        options: [.usesLineFragmentOrigin, .usesFontLeading]
    )
    let rect = NSRect(
        x: x,
        y: canvasHeight - top - ceil(measured.height),
        width: width,
        height: ceil(measured.height)
    )
    attributed.draw(with: rect, options: [.usesLineFragmentOrigin, .usesFontLeading])
}

func drawImageAspectFill(_ image: NSImage, in rect: NSRect, cornerRadius: CGFloat) {
    let clipPath = NSBezierPath(roundedRect: rect, xRadius: cornerRadius, yRadius: cornerRadius)
    NSGraphicsContext.saveGraphicsState()
    clipPath.addClip()

    let imageSize = image.size
    let scale = max(rect.width / imageSize.width, rect.height / imageSize.height)
    let drawSize = NSSize(width: imageSize.width * scale, height: imageSize.height * scale)
    let drawRect = NSRect(
        x: rect.midX - drawSize.width / 2,
        y: rect.midY - drawSize.height / 2,
        width: drawSize.width,
        height: drawSize.height
    )
    image.draw(in: drawRect, from: .zero, operation: .sourceOver, fraction: 1)
    NSGraphicsContext.restoreGraphicsState()
}

func drawPhone(
    image: NSImage,
    rect: NSRect,
    borderColor: NSColor,
    shadowAlpha: CGFloat
) {
    let shadow = NSShadow()
    shadow.shadowColor = color(32, 28, 22, shadowAlpha)
    shadow.shadowBlurRadius = 24
    shadow.shadowOffset = NSSize(width: 0, height: -8)

    let shell = NSBezierPath(roundedRect: rect, xRadius: 32, yRadius: 32)
    NSGraphicsContext.saveGraphicsState()
    shadow.set()
    color(255, 255, 255).setFill()
    shell.fill()
    NSGraphicsContext.restoreGraphicsState()

    let screenRect = rect.insetBy(dx: 9, dy: 9)
    drawImageAspectFill(image, in: screenRect, cornerRadius: 24)

    borderColor.setStroke()
    shell.lineWidth = 2
    shell.stroke()
}

let scriptURL = URL(fileURLWithPath: CommandLine.arguments[0]).standardizedFileURL
let projectURL = scriptURL.deletingLastPathComponent().deletingLastPathComponent()
let assetsURL = projectURL.appendingPathComponent("public/assets")
let outputURL = assetsURL.appendingPathComponent("og-septimuslab-v1.png")

func load(_ name: String) -> NSImage {
    let url = assetsURL.appendingPathComponent(name)
    guard let image = NSImage(contentsOf: url) else {
        fputs("Could not load image at \(url.path)\n", stderr)
        exit(1)
    }
    return image
}

let logo = load("septimus-footer.png")
let foods = load("purescan-foods-screen.webp")
let cosmetics = load("purescan-screen.webp")
let fintel = load("fintel-screen.webp")

guard
    let bitmap = NSBitmapImageRep(
        bitmapDataPlanes: nil,
        pixelsWide: Int(canvasWidth),
        pixelsHigh: Int(canvasHeight),
        bitsPerSample: 8,
        samplesPerPixel: 4,
        hasAlpha: true,
        isPlanar: false,
        colorSpaceName: .deviceRGB,
        bytesPerRow: 0,
        bitsPerPixel: 0
    ),
    let graphicsContext = NSGraphicsContext(bitmapImageRep: bitmap)
else {
    fputs("Could not create social image canvas\n", stderr)
    exit(1)
}

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = graphicsContext

color(248, 246, 241).setFill()
NSRect(x: 0, y: 0, width: canvasWidth, height: canvasHeight).fill()

color(228, 223, 212, 0.58).setStroke()
for x in stride(from: CGFloat(0), through: canvasWidth, by: 74) {
    let line = NSBezierPath()
    line.move(to: NSPoint(x: x, y: 0))
    line.line(to: NSPoint(x: x, y: canvasHeight))
    line.lineWidth = 1
    line.stroke()
}
for y in stride(from: CGFloat(0), through: canvasHeight, by: 74) {
    let line = NSBezierPath()
    line.move(to: NSPoint(x: 0, y: y))
    line.line(to: NSPoint(x: canvasWidth, y: y))
    line.lineWidth = 1
    line.stroke()
}

color(196, 93, 62, 0.11).setFill()
NSBezierPath(ovalIn: NSRect(x: -90, y: 430, width: 290, height: 290)).fill()
color(30, 69, 124, 0.08).setFill()
NSBezierPath(ovalIn: NSRect(x: 1020, y: -90, width: 280, height: 280)).fill()

logo.draw(
    in: NSRect(x: 70, y: 466, width: 64, height: 95),
    from: .zero,
    operation: .sourceOver,
    fraction: 1
)
drawText(
    "SEPTIMUSLAB",
    x: 156,
    top: 80,
    width: 480,
    font: font("Avenir Next Demi Bold", size: 24, fallbackWeight: .semibold),
    color: color(30, 69, 124)
)
drawText(
    "MOBİL İNOVASYON STÜDYOSU",
    x: 156,
    top: 116,
    width: 500,
    font: font("Avenir Next Medium", size: 15, fallbackWeight: .medium),
    color: color(196, 93, 62)
)
drawText(
    "Akıllı Mobil\nDeneyimler Üretiyoruz",
    x: 70,
    top: 188,
    width: 620,
    font: font("Georgia Bold", size: 54, fallbackWeight: .bold),
    color: color(32, 28, 22),
    lineHeight: 62
)
drawText(
    "Yapay zeka destekli mobil uygulamalarla gündelik kararları daha anlaşılır hale getiriyoruz.",
    x: 72,
    top: 352,
    width: 560,
    font: font("Avenir Next Regular", size: 25, fallbackWeight: .regular),
    color: color(76, 70, 61),
    lineHeight: 35
)

let products = ["PureScan Foods", "PureScan Cosmetics", "Fintel"]
let pillColors = [color(184, 134, 11), color(45, 138, 122), color(30, 69, 124)]
var pillX: CGFloat = 72
for (index, product) in products.enumerated() {
    let attributes: [NSAttributedString.Key: Any] = [
        .font: font("Avenir Next Medium", size: 15, fallbackWeight: .medium),
        .foregroundColor: pillColors[index],
    ]
    let textSize = product.size(withAttributes: attributes)
    let pillRect = NSRect(x: pillX, y: 70, width: textSize.width + 28, height: 34)
    let pill = NSBezierPath(roundedRect: pillRect, xRadius: 17, yRadius: 17)
    pillColors[index].withAlphaComponent(0.09).setFill()
    pill.fill()
    product.draw(
        at: NSPoint(x: pillRect.minX + 14, y: pillRect.minY + 8),
        withAttributes: attributes
    )
    pillX += pillRect.width + 10
}

drawText(
    "septimuslab.com",
    x: 72,
    top: 574,
    width: 500,
    font: font("Menlo Regular", size: 17, fallbackWeight: .medium),
    color: color(117, 110, 98)
)

drawPhone(
    image: foods,
    rect: NSRect(x: 690, y: 88, width: 190, height: 420),
    borderColor: color(184, 134, 11, 0.66),
    shadowAlpha: 0.13
)
drawPhone(
    image: fintel,
    rect: NSRect(x: 1000, y: 88, width: 190, height: 420),
    borderColor: color(30, 69, 124, 0.66),
    shadowAlpha: 0.13
)
drawPhone(
    image: cosmetics,
    rect: NSRect(x: 834, y: 42, width: 220, height: 500),
    borderColor: color(45, 138, 122, 0.78),
    shadowAlpha: 0.18
)

NSGraphicsContext.restoreGraphicsState()

guard let png = bitmap.representation(using: .png, properties: [:]) else {
    fputs("Could not encode social image\n", stderr)
    exit(1)
}

try png.write(to: outputURL)
print("Wrote \(outputURL.path)")
