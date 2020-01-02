(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{210:function(r,t,e){r.exports=e.p+"assets/img/harbor-horizontal-color.ef644877.svg"},242:function(r,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes-harbor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-harbor"}},[r._v("#")]),r._v(" Kubernetes + Harbor")]),r._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ruzickap/k8s-harbor",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/ruzickap/k8s-harbor/workflows/build/badge.svg",alt:"Build Status"}}),a("OutboundLink")],1)]),r._v(" "),a("p",[a("a",{attrs:{href:"https://goharbor.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Harbor"),a("OutboundLink")],1),r._v(" is an open source cloud native registry that\nstores, signs, and scans container images for vulnerabilities.")]),r._v(" "),a("p",[a("img",{attrs:{src:e(210),alt:"Harbor",title:"Harbor"}})]),r._v(" "),a("p",[r._v("Harbor solves common challenges by delivering trust, compliance, performance,\nand interoperability. It fills a gap for organizations and applications that\ncannot use a public or cloud-based registry, or want a consistent experience\nacross clouds.")]),r._v(" "),a("ul",[a("li",[r._v("Demo GitHub repository: "),a("a",{attrs:{href:"https://github.com/ruzickap/k8s-harbor",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://github.com/ruzickap/k8s-harbor"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("Demo Web Pages: "),a("a",{attrs:{href:"https://ruzickap.github.io/k8s-harbor",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://ruzickap.github.io/k8s-harbor"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("Presentation git repository: "),a("a",{attrs:{href:"https://github.com/ruzickap/k8s-harbor-presentation",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://github.com/ruzickap/k8s-harbor-presentation"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("Presentation URL: "),a("a",{attrs:{href:"https://ruzickap.github.io/k8s-harbor-presentation",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://ruzickap.github.io/k8s-harbor-presentation"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("YouTube: "),a("a",{attrs:{href:"https://youtu.be/niZJOM7ND24",target:"_blank",rel:"noopener noreferrer"}},[r._v("Harbor presentation in Czech language"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("Asciinema screencast: "),a("a",{attrs:{href:"https://asciinema.org/a/253519",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://asciinema.org/a/253519"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("Asciinema screencast (45 minutes): "),a("a",{attrs:{href:"https://asciinema.org/a/278803",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://asciinema.org/a/278803"),a("OutboundLink")],1)])]),r._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[r._v("#")]),r._v(" Requirements")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ansible.com",target:"_blank",rel:"noopener noreferrer"}},[r._v("ansible"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://aws.amazon.com/cli/",target:"_blank",rel:"noopener noreferrer"}},[r._v("awscli"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/kubernetes-sigs/aws-iam-authenticator",target:"_blank",rel:"noopener noreferrer"}},[r._v("AWS IAM Authenticator for Kubernetes"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://aws.amazon.com/account/",target:"_blank",rel:"noopener noreferrer"}},[r._v("AWS account"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[r._v("kubectl"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://eksctl.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("eksctl"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("Kubernetes, Docker, Linux, AWS knowledge required")])]),r._v(" "),a("h2",{attrs:{id:"objectives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objectives"}},[r._v("#")]),r._v(" Objectives")]),r._v(" "),a("ul",[a("li",[r._v("Download and install Harbor to your Kubernetes cluster")])]),r._v(" "),a("h2",{attrs:{id:"lab-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab-architecture"}},[r._v("#")]),r._v(" Lab Architecture")]),r._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ruzickap/k8s-harbor-presentation/master/images/harbor_demo_architecture_diagram.svg?sanitize=true",alt:"Lab architecture",title:"Lab architecture"}})]),r._v(" "),a("h2",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[r._v("#")]),r._v(" Content")]),r._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/part-01/"}},[r._v("Part 01 - Create EKS cluster")])],1),r._v(" "),a("li",[a("router-link",{attrs:{to:"/part-02/"}},[r._v("Part 02 - Install Helm")])],1),r._v(" "),a("li",[a("router-link",{attrs:{to:"/part-03/"}},[r._v("Part 03 - ingress-nginx + cert-manager installation")])],1),r._v(" "),a("li",[a("router-link",{attrs:{to:"/part-04/"}},[r._v("Part 04 - Harbor installation")])],1),r._v(" "),a("li",[a("router-link",{attrs:{to:"/part-05/"}},[r._v("Part 05 - Initial Harbor tasks")])],1),r._v(" "),a("li",[a("router-link",{attrs:{to:"/part-06/"}},[r._v("Part 06 - Harbor and Helm charts")])],1),r._v(" "),a("li",[a("router-link",{attrs:{to:"/part-07/"}},[r._v("Part 07 - Harbor and container images")])],1),r._v(" "),a("li",[a("router-link",{attrs:{to:"/part-08/"}},[r._v("Part 08 - Project settings")])],1),r._v(" "),a("li",[a("router-link",{attrs:{to:"/part-09/"}},[r._v("Part 09 - Clean-up")])],1)]),r._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[r._v("#")]),r._v(" Links")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("Video:")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://youtu.be/Rs3zByxI8aY",target:"_blank",rel:"noopener noreferrer"}},[r._v("Intro to Harbor"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/RZQVBWwGa2s",target:"_blank",rel:"noopener noreferrer"}},[r._v("Intro: Harbor - James Zabala & Henry Zhang, VMware"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/OKj1XxtsTCo",target:"_blank",rel:"noopener noreferrer"}},[r._v("Deep Dive: Harbor - Tan Jiang & Jia Zou, VMware"),a("OutboundLink")],1)])])]),r._v(" "),a("li",[a("p",[r._v("Pages:")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/@ikod/deploy-harbor-container-registry-in-production-89352fb1a114",target:"_blank",rel:"noopener noreferrer"}},[r._v("Deploying Harbor Container Registry in Production"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://blog.inkubate.io/how-to-use-harbor-private-registry-with-kubernetes/",target:"_blank",rel:"noopener noreferrer"}},[r._v("How to install and use VMware Harbor private registry with Kubernetes"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/notary/advanced_usage/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Use the Notary client for advanced users"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://werner-dijkerman.nl/2019/02/24/signing-docker-images-with-notary-server/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Signing Docker images with Notary server"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1151425",target:"_blank",rel:"noopener noreferrer"}},[r._v("Handy API Harbor calls (in Chinese)"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://editor.swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Swagger Editor"),a("OutboundLink")],1),r._v(" + Import "),a("a",{attrs:{href:"https://raw.githubusercontent.com/goharbor/harbor/7b6e83090e26d171c0d0e0dacd14e2b61fab45e1/API/harbor/swagger.yaml",target:"_blank",rel:"noopener noreferrer"}},[r._v("Harbor's swagger.yaml"),a("OutboundLink")],1)])])])]),r._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/cncf/artwork/ab42c9591f6e0fdccc62c7b88f353d3fdc825734/harbor/stacked/color/harbor-stacked-color.svg?sanitize=true",alt:"Harbor",title:"Harbor"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);