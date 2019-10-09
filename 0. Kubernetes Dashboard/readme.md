# Kubernetes Dashboard

`helm repo add stable https://kubernetes-charts.storage.googleapis.com`

`helm install stable/kubernetes-dashboard --set=service.externalPort=8080,resources.limits.cpu=200m --namespace=kube-system --generate-name`

`helm list`

`helm delete my-release`