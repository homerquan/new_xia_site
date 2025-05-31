---
title: Ultra-Low Power Gaze Tracking for Virtual Reality
authors:
- Tianxing Li
- Qiang Liu
- Xia Zhou
date: '2017-11-01'
doi: ''
publication_types:
- '1'
publication: ACM Conference on Embedded Networked Sensor Systems (SenSys), 2017.
publication_short: SenSys
award: Best Paper Candidate. SIGMOBILE Research Highlight
abstract: "Tracking user's eye fixation direction is crucial to virtual reality (VR):\
  \ it eases user's interaction with the virtual scene and enables intelligent rendering\
  \ to improve user's visual experiences and save system energy. Existing techniques\
  \ commonly rely on cameras and active infrared emitters, making them too expensive\
  \ and power-hungry for VR headsets (especially mobile VR headsets).\nWe present\
  \ LiGaze, a low-cost, low-power approach to gaze tracking tailored to VR. It relies\
  \ on a few low-cost photodiodes, eliminating the need for cameras and active infrared\
  \ emitters. Reusing light emitted from the VR screen, LiGaze leverages photodiodes\
  \ around a VR lens to measure reflected screen light in different directions. It\
  \ then infers gaze direction by exploiting pupil's light absorption property. The\
  \ core of LiGaze is to deal with screen light dynamics and extract changes in reflected\
  \ light related to pupil movement. LiGaze infers a 3D gaze vector on the fly using\
  \ a lightweight regression algorithm. We design and fabricate a LiGaze prototype\
  \ using off-the-shelf photodiodes. Our comparison to a commercial VR eye tracker\
  \ (FOVE) shows that LiGaze achieves 6.3\xB0 and 10.1\xB0 mean within-user and cross-user\
  \ accuracy. Its sensing and computation consume 791\u03BCW in total and thus can\
  \ be completely powered by a credit-card sized solar cell harvesting energy from\
  \ indoor lighting. LiGaze's simplicity and ultra-low power make it applicable in\
  \ a wide range of VR headsets to better unleash VR's potential."
featured: false
nopage: true
links:
- name: Project website
  url: http://dartnets.cs.dartmouth.edu/ligaze
image: featured.jpg
image-alt: 3D Wi-Fi reflector brain map
resources:
  - cite.bib
  - sensys17-ligaze.pdf
cite: "cite.bib"
pdf: sensys17-ligaze.pdf
---


