# ZQ Programmierung für das IoT - AFBB Dresden
11.-15.07.2022 Clemens Hanschmidt, Alexander Lorz

# Lernziele
Nach Abschluss dieses einwöchigen Praktikums sind Sie in der Lage:
* Im Team gemeinsam eine komplexe informationstechnische Aufgabenstellung zu bearbeiten, Lösungskonzepte zu entwickeln, diese zu dokumentieren und prototypisch umzusetzen.
[ ]
* Die dazu notwendigen Teilaufgaben eingenständig zu identifizieren und über mehrere Entwicklungsgruppen und -phasen zu verteilen und koordinieren.
[ ]
* Grundlegende Konzepte und Architekturmerkmale des Internet of Things zu benennen und deren Bedeutung für die Entwicklung eines komplexen IT-Systems darzustellen.
[ ]
* Verbreitete Technologien und Protokolle für ein einfaches IoT-System auszuwählen und zu benutzen und dafür Schnittstellen zwischen Systemkomponenten zu entwerfen und umzusetzen.
[ ]
* Ein oder mehrere einfache Constrained-Devices sowie die passenden Backend-Infrastruktur zu dessen Entwicklung und Betrieb zu konzipieren und umzusetzen.
[ ]

# Ziel 1: WLAN einrichten + Dinge ausprobieren
* [x] WLAN einrichten
* Dokumentieren:
> [x] Vereinbarung zur Vergabe von IP-Adressen - welche Gruppe benutzt welche Ranges?
>> * 100-119 Orange
>> * 120-139 Blau
>> * 140-159 Violett
> [x] Vereinbarung welcher Bereich IP-Adressen automatisch vergibt
>> * 20-99
> [x] Vereinbarung welcher Bereich für reservierte Geräte
>> * 1-19
>> * 1 - WappyBoi
> [x] Netzwerkmeister = Marc

# Ziel 2: Vorhandene Geräte mit MQTT steuern


# Ziel 3: Raspberry Pi einrichten
* [x] Installieren von Raspberry Pi OS Lite (32-bit)
* [x] Hostname vergeben - Raspiboi
* [x] SSH-Zugang ermöglichen
* [x] Root-Passwort vergeben - 

* [x] Administratorpasswort - 
* [x] Statische IP - 192.168.178.141 WLAN, 192.168.178.140 LAN
* [x] Zeitzonen usw anpassen
* [x] Update/Aktualisierung

# Ziel 4: IOTStack installieren und einrichten
[Link zum Tutorial](https://sensoriot.github.io&/IOTStack/Basic_setup)

* Bestandteile:
> [ ] Grafana\
> [ ] Influxdb\
> [ ] Mosquitto\
> [ ] NodeRed\
> [ ] Portainer-CE

* Ports:
> 3000 - Grafana
>> username: admin\
>> password: admin
>>
> 1880 - NodeRed\
> 9000 - Portainer
>> username: \
>> password: \
