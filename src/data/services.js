import { Shield, Globe, Server } from "lucide-react";

export const services = [
  {
    id: "network-pentest",
    title: "Network Pentest",
    icon: Shield,
    summary:
      "External and black-box pentest to find any security misconfiguration, vulnerable and outdated services, weak password policies and user privilege escalation.",
    points: [
      "Vulnerability Scanning",
      "Blue-Team Detection auditing",
      "Token Harvesting",
      "Credential & authentication testing",
      "Privilege Escalation evaluation",
    ],
  },
  {
    id: "web-app-pentest",
    title: "Web App Pentest",
    icon: Globe,
    summary:
      "Manual pentesting of yout web applications to uncover hidden vulnerabilities that could prove detrimental to your web infrastructure and business service.",
    points: [
      "OWASP Top 10",
      "Upload Vulnerability",
      "Cross-Site Scripting (XSS)",
      "Injection, SSRF & deserialization flaws",
      "Password Policy and Auth Testing",
    ],
  },
  {
    id: "internal-ad-pentest",
    title: "Internal AD Pentest",
    icon: Server,
    summary:
      "Active Directory assessment and pentest to evaluate the security of the internal network infrastructure and its service configurations and remediation for a more internal security hardening.",
    points: [
      "Domain enumeration & LLMNR Poisoning",
      "Kerberos (TGS & TGT) & NTLM relay",
      "GPO / ACL / certificate misconfiguration abuse",
      "Privilege escalation & lateral movement",
      "Domain persistence (Golden Ticket)",
    ],
  },
];

export const methodology = [
  {
    step: "01",
    title: "Information Gathering",
    description:
      "Passive Reconnaisance and use of Open-Source Intelligence (OSINT) to map the attack surface.",
  },
  {
    step: "02",
    title: "Scanning & Enumeration",
    description:
      "Acive enumeration of hosts, services, credentials and exposures with the same tooling real adversaries carry.",
  },
  {
    step: "03",
    title: "Exploitation",
    description:
      "Pentesting the services or technologies to identify the severity of the found vulnerability and its affect on the netwrok/web infrastructure.",
  },
  {
    step: "04",
    title: "Post-Exploitation",
    description:
      "Privilege escalation, persistence and lateral movement to demonstrate how far a single compromised asset can take an attacker.",
  },
  {
    step: "05",
    title: "Reporting & Remediation",
    description:
      "A clear, prioritised report with reproducible evidence, business-risk ratings and step-by-step remediation guidance.",
  },
];