🛡️ CyberLab SOC Platform
A Cybersecurity Monitoring & Threat Detection Lab

<p align="center">
<img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" alt="Project Status">
<img src="https://img.shields.io/badge/Python-3.12+-blue?style=for-the-badge&logo=python&logoColor=white" alt="Python">
<img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
<img src="https://img.shields.io/badge/React-TypeScript-3178C6?style=for-the-badge&logo=react&logoColor=white" alt="React">
<img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

🎯 Overview

CyberLab SOC Platform is a hands-on cybersecurity project designed to demonstrate security monitoring, log analysis, threat detection, and incident response workflows.

The platform aims to help security analysts investigate suspicious activity, identify potential threats, and understand how security events can be mapped to the MITRE ATT&CK framework.

Built as a practical portfolio project for aspiring SOC Analysts, Blue Team Engineers, and Cybersecurity Professionals.

Learn by investigating. Detect by understanding. Defend by design.
✨ Features
🔎 Log Analysis — Import and analyze JSON, CSV, and text-based security logs.
🚨 Threat Detection — Identify suspicious authentication patterns and potential brute-force activity.
📊 Security Dashboard — Visualize alerts, severity levels, and event trends.
🗂️ Incident Management — Track investigations, update statuses, and document findings.
🧠 MITRE ATT&CK Mapping — Connect relevant detection rules to documented adversary techniques.
🧪 Event Simulator — Generate synthetic security events for safe testing and demonstrations.
📡 REST API — Access analysis and incident data through a documented API.
🐳 Docker Support — Prepare a reproducible development and deployment environment.
✅ Automated Testing — Validate detection logic and core application behavior.

Features are planned or in development until implemented and verified.

🏗️ Architecture
             ┌──────────────────────┐
             │   Security Analyst   │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │   React Dashboard    │
             └──────────┬───────────┘
                        │ REST API
                        ▼
             ┌──────────────────────┐
             │    FastAPI Backend   │
             └──────────┬───────────┘
                        │
             ┌──────────┴───────────┐
             ▼          ▼           ▼
        ┌────────┐ ┌──────────┐ ┌──────────┐
        │  Log   │ │  Threat  │ │ Incident │
        │Parser  │ │ Detection│ │Management│
        └───┬────┘ └────┬─────┘ └────┬─────┘
            └────────────┼────────────┘
                         ▼
                 ┌──────────────┐
                 │   Database   │
                 └──────────────┘

🧰 Tech Stack
Technology	Purpose
Python	Detection logic and data processing
FastAPI	Backend and REST API
React	Interactive user interface
TypeScript	Frontend type safety
SQLite	Local data storage
Docker	Reproducible environments
Pytest	Automated testing
Git & GitHub	Version control and collaboration
🚀 Getting Started

The following setup describes the intended development environment. Commands may need adjustment until the application and dependency files are implemented.

Prerequisites
Python 3.12+
Node.js LTS and npm
Git
Docker Desktop (optional)
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/cyberlab-soc-platform.git
cd cyberlab-soc-platform


Replace YOUR_USERNAME with your GitHub username.

2. Start the backend

After the backend requirements and application entry point have been created:

cd backend
python -m venv .venv


Activate the environment on Windows PowerShell:

.\.venv\Scripts\Activate.ps1


Install dependencies when requirements.txt is available:

pip install -r requirements.txt


Start the API when main.py is implemented:

uvicorn main:app --reload


API documentation should be available at:

http://127.0.0.1:8000/docs

3. Start the frontend

After the React application has been created:

cd frontend
npm install
npm run dev


Use the local URL printed by the development server.

🔬 Example Investigation

A planned demonstration scenario:

Import synthetic authentication logs.
Detect repeated failed login attempts from a fictional source IP.
Review the generated alert and its severity.
Investigate related events and timestamps.
Document findings and mark the incident as resolved or a false positive.
Export an incident report.

This workflow demonstrates how raw log events can support a structured security investigation.

🧠 Cybersecurity Concepts

The project is intended to demonstrate practical understanding of:

Security Operations Center (SOC) workflows
Blue Team monitoring and alert triage
Log parsing and event normalization
Detection engineering fundamentals
Authentication attack indicators
Incident investigation and documentation
MITRE ATT&CK technique mapping
Secure API design
Automated testing and reproducible deployments
🗺️ Roadmap
Implement the FastAPI backend
Add JSON and CSV log ingestion
Develop configurable detection rules
Build the security dashboard
Implement incident tracking
Add MITRE ATT&CK references
Create synthetic event datasets
Write automated tests
Add Docker Compose configuration
Publish setup and investigation guides
Add screenshots and a demonstration video
🔐 Security & Responsible Use

CyberLab is intended for defensive security education and authorized testing.

Use synthetic or properly authorized security logs.
Never commit API keys, passwords, access tokens, or private data.
Validate imported files and treat their contents as untrusted input.
Do not use the project to access systems without permission.
Verify detection results before treating an alert as a confirmed incident.
🤝 Contributing

Contributions, bug reports, detection-rule improvements, and documentation updates are welcome.

Fork the repository.
Create a feature branch.
Make and test your changes.
Submit a pull request describing the improvement.
