import re
from collections import Counter
import os

root_dir = r"c:\Users\admin\sarec-medical-center"
pattern = re.compile(r"images/([^/\s\"')]+\.webp)")
counts = Counter()

for root, _, files in os.walk(root_dir):
    for file in files:
        if file.endswith((".html", ".css")):
            try:
                with open(os.path.join(root, file), "r", encoding="utf-8") as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    counts.update(matches)
            except Exception:
                pass

# Get all .webp files in images/ directory to include those with 0 counts if necessary, 
# but the prompt says "finds every reference... and prints a sorted list of (count, name) for each .webp file in images/".
# It's slightly ambiguous if it means "of those found" or "all files in the folder". 
# Usually "finds every reference" implies the ones referred to.
# Let's check the images folder to be sure.

img_dir = os.path.join(root_dir, "images")
all_webp = []
if os.path.exists(img_dir):
    all_webp = [f for f in os.listdir(img_dir) if f.endswith(".webp")]

# Make sure all files in images/ are in counts (at least 0)
for f in all_webp:
    if f not in counts:
        counts[f] = 0

sorted_counts = sorted(counts.items(), key=lambda x: (x[1], x[0]))

for name, count in sorted_counts:
    print(f"{count}  {name}")
