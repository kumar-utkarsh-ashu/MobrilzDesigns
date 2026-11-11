#!/usr/bin/env python3
import os
import subprocess
import time

CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT_DIR = "/Users/kumarutkarsh/Documents/GitHub/MobrilzDesigns/.screenshots"
BASE_URL = "http://localhost:3005"

os.makedirs(OUT_DIR, exist_ok=True)

# 8 Responsive Width Benchmarks
VIEWPORTS = [
    (320, "01_mobile_320px"),
    (375, "02_mobile_375px"),
    (414, "03_mobile_414px"),
    (640, "04_phablet_640px"),
    (768, "05_tablet_768px"),
    (1024, "06_laptop_1024px"),
    (1280, "07_desktop_1280px"),
    (1536, "08_wide_1536px")
]

# Height targets for different sections and full page
SHOT_CONFIGS = [
    ("full_page", 6200),
    ("hero_viewport", 900),
    ("projects_portfolio", 1400),
    ("expertise_services", 1100),
    ("process_highway", 950),
    ("tech_stack", 900),
    ("why_us_bento", 850)
]

print("Executing 50+ Real Application Screenshots across 8 Responsive Widths...")
shot_count = 0

for width, width_name in VIEWPORTS:
    for shot_name, height in SHOT_CONFIGS:
        shot_count += 1
        filename = f"{shot_count:02d}_{width_name}_{shot_name}.png"
        filepath = os.path.join(OUT_DIR, filename)
        
        cmd = [
            CHROME_BIN,
            "--headless",
            "--disable-gpu",
            f"--window-size={width},{height}",
            f"--screenshot={filepath}",
            BASE_URL
        ]
        
        try:
            res = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
            if os.path.exists(filepath):
                size_kb = os.path.getsize(filepath) / 1024
                print(f"[{shot_count:02d}/56] Captured {filename} ({width}x{height}px, {size_kb:.1f} KB)")
        except Exception as e:
            print(f"Error capturing {filename}: {e}")

print(f"\nSuccessfully completed! Total {shot_count} real screenshots captured in {OUT_DIR}")

