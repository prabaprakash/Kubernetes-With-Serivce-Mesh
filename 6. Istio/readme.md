# Digitial Ocean Instructions

`https://www.digitalocean.com/community/tutorials/how-to-install-and-use-istio-with-kubernetes`

# Kubectl
```
$ helm repo add istio.io https://storage.googleapis.com/istio-release/releases/1.1.7/charts/
$ helm repo list

$ kubectl create serviceaccount --namespace kube-system tiller
$ kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
$ kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'


$ NAMESPACE=istio-system
$ kubectl create ns $NAMESPACE
$ helm init --service-account tiller
$ helm install --name istio-init --namespace istio-system istio.io/istio-init
$ kubectl get crds | grep 'istio.io\|certmanager.k8s.io' | wc -l
$ helm install --name istio --namespace istio-system --set grafana.enabled=true istio.io/istio
$ kubectl get svc -n istio-system
$ kubectl get pods -n istio-system
$ kubectl label namespace default istio-injection=enabled
$ kubectl get namespace -L istio-injection
```
