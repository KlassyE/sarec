"""Switch headers/footers to use the full SAREC logo (text built-in) and drop the
duplicate sibling text. The mark remains only for favicons."""
import os, re, glob

ROOT = os.path.dirname(os.path.abspath(__file__))

# Header pattern:
#   <img src="images/sarec-mark.png" alt="SAREC" class="logo-img">
#   <div class="logo-text">
#       <h1>SAREC Medicare Centre</h1>
#       <small>Kyaliwajjala, Kampala</small>
#   </div>
HEADER_RE = re.compile(
    r'<img src="images/sarec-mark\.png" alt="SAREC" class="logo-img">\s*'
    r'<div class="logo-text">.*?</div>',
    re.S,
)
HEADER_NEW = '<img src="images/sarec-logo.png" alt="SAREC Medicare Centre" class="logo-img">'

# Footer pattern (inside .footer-logo):
#   <img src="images/sarec-mark.png" alt="SAREC" class="logo-img">
#   <span>SAREC Medicare Centre</span>
FOOTER_RE = re.compile(
    r'<img src="images/sarec-mark\.png" alt="SAREC" class="logo-img">\s*'
    r'<span>SAREC Medicare Centre</span>',
    re.S,
)
FOOTER_NEW = '<img src="images/sarec-logo.png" alt="SAREC Medicare Centre" class="logo-img">'

for path in glob.glob(os.path.join(ROOT, "*.html")):
    src = open(path, encoding="utf-8").read()
    out = HEADER_RE.sub(HEADER_NEW, src)
    out = FOOTER_RE.sub(FOOTER_NEW, out)
    if out != src:
        open(path, "w", encoding="utf-8").write(out)
        print("updated:", os.path.basename(path))
