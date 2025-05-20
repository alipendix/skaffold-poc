## 🔁 ¿Qué es Skaffold?

Herramienta de Google que automatiza el ciclo de CI para aplicaciones en Kubernetes. Permite compilar, etiquetar, subir imágenes, desplegarlas y hacer seguimiento de cambios sin tener que escribir comandos manualmente cada vez.

## 🚀 ¿Para qué sirve?

Facilita el desarrollo local y la integración continua en clústeres Kubernetes, ideal para quienes trabajan con microservicios y quieren ver los cambios casi en tiempo real.

## 🛠️ Características clave:

- Soporte para múltiples builders (Docker, Buildpacks, Jib, etc.)
- Integración con Helm, Kustomize y kubectl
- Hot reload: recompila y reimplementa al guardar archivos
- Compatible con entornos locales o remotos

## 💡 Perfecto para equipos DevOps y desarrolladores que buscan un flujo de trabajo ágil con Kubernetes.

## 📋 Requisitos mínimos

Para utilizar Skaffold, asegúrate de cumplir con los siguientes requisitos:

- **Sistema operativo**: Linux, macOS o Windows
- **Docker**: Debes tener Docker instalado y en ejecución para crear imágenes y contenedores.
- **Kubernetes**: Necesitas un clúster de Kubernetes accesible para desplegar tus aplicaciones.
- **Herramientas adicionales**:
  - `kubectl` para interactuar con Kubernetes.
  - **Helm** (opcional) para gestionar charts de Kubernetes.
  - **Git** (opcional) si estás trabajando con repositorios de código.

[Más información en Skaffold](https://skaffold.dev/)

## ⚙️ Comandos para la instalación y ejecución de la poc

Previamente tenemos que tener corriendo un cluster de kubernetes en nuestro equipo (Minikube)

### 1. Instalar Skaffold

Sigue los pasos según tu sistema operativo para instalar Skaffold:

  ```bash
  curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64
  sudo mv skaffold /usr/local/bin
```

### 2. Verificar Instalación 

  ```bash
 skaffold version
```

### 3. Clonar el repositorio 

  ```bash
 git clone https://github.com/alipendix/skaffold-poc.git
 cd skaffold-poc
```

### 3. Ejecutar el ejemplo con Skaffold

  ```bash
 skaffold dev
```

### 3. Servicio accesible mediante

  ```bash
 minikube service skaffold-service
```


