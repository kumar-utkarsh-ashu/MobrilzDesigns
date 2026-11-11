#!/usr/bin/env python3
import os
import subprocess
import time
import urllib.request

CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT_DIR = "/Users/kumarutkarsh/Documents/GitHub/MobrilzDesigns/.screenshots"
BASE_URL = "http://localhost:3005"

os.makedirs(OUT_DIR, exist_ok=True)

# 8 Responsive Widths Benchmark
WIDTHS = [
    (320, 700, "mobile_s_320"),
    (375, 812, "mobile_m_375"),
    (414, 896, "mobile_l_414"),
    (640, 900, "phablet_640"),
    (768, 1024, "tablet_768"),
    (1024, 800, "laptop_s_1024"),
    (1280, 850, "desktop_1280"),
    (1536, 960, "wide_1536")
]

SECTIONS = [
    ("", "full_view"),
    ("#hero", "hero"),
    ("#projects", "projects_portfolio"),
    ("#expertise", "expertise_services"),
    ("#process", "process_highway"),
    ("#technologies", "tech_stack"),
    ("#why-us", "why_partner"),
    ("#reviews", "client_reviews"),
    ("#blogs", "perspectives_blogs"),
    ("#faqs", "faqs_accordion"),
    ("#cta", "cta_section")
]

print("Starting 50+ Screenshot Capture Protocol across 8 Screen Widths...")
count = 0

for w, h, w_label in WIDTHS:
    for anchor, sec_label in SECTIONS:
        url = f"{BASE_URL}/{anchor}"
        filename = f"{count+1:02d}_{w_label}_{sec_label}.png"
        filepath = os.path.join(OUT_DIR, filename)
        
        cmd = [
            CHROME_BIN,
            "--headless",
            "--disable-gpu",
            f"--window-size={w},{h}",
            f"--screenshot={filepath}",
            url
        ]
        
        try:
            subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
            if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
                count += 1
                size_kb = os.path.getsize(filepath) / 1024
                print(f"[{count:02d}/50+] Captured {filename} ({w}px width, {size_kb:.1f} KB)")
        except Exception as e:
            print(f"Failed to capture {filename}: {e}")

print(f"\nSuccessfully captured {count} real application screenshots in {OUT_DIR}!")

