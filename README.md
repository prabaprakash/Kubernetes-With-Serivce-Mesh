Be ready with Digitial Ocean Kubernetes with 1 master and 1 node

# 0. Installing Nginx Ingress

`$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.24.1/deploy/mandatory.yaml`

`$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.24.1/deploy/provider/cloud-generic.yaml`

TLS

`kubectl apply -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.8/deploy/manifests/00-crds.yaml`

`kubectl label namespace kube-system certmanager.k8s.io/disable-validation="true"`

`helm repo add jetstack https://charts.jetstack.io`

`helm install --name cert-manager --namespace kube-system jetstack/cert-manager --version v0.8.0`



# 1. Echo APP

`$ cd 1. Echo APP`

`$ kubectl apply  -f deployment.yaml`

`$ kubectl apply  -f service.yaml`

`$ kubectl apply  -f ingress.yaml`

# 2. Node APP

`$ cd 2. Node APP`

`$ kubectl apply  -f deployment.yaml`

`$ kubectl apply  -f service.yaml`

`$ kubectl apply  -f ingress.yaml`

# 3. Cloud Torrent

`$ cd 3. Cloud Torrent`

`$ cd volume`

`$ kubectl apply -f 1.pod.yaml`

`$ kubectl apply -f 2.service.yaml`

`$ kubectl apply -f 3.persistantVolume.yaml`

`$ kubectl apply -f 4.persistantVolumeClaim`

`$ cd ..`

`$ kubectl apply  -f deployment.yaml`

`$ kubectl apply  -f service.yaml`

`$ kubectl apply  -f ingress.yaml`


# get Node

`kubectl --kubeconfig="k8s-cluster-kubeconfig.yaml" get nodes`


