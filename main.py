import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QWidget, QLineEdit, QPushButton
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtCore import QUrl
from PyQt5.QtGui import QIcon

class Browser(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Plugin")
        self.setWindowIcon(QIcon('favicon.png')) 
        self.setGeometry(100, 100, 1200, 800)
        self.setContentsMargins(0, 0, 0, 0)  

        # Создание виджетов
        self.browser = QWebEngineView()
        #self.url_bar = QLineEdit()
        #self.go_button = QPushButton("Go")

        # Установка макета
        layout = QVBoxLayout()
        #layout.addWidget(self.url_bar)
        #layout.addWidget(self.go_button)
        layout.addWidget(self.browser)

        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

        # Подключение сигналов
        #self.go_button.clicked.connect(self.load_url)
        #self.url_bar.returnPressed.connect(self.load_url)

        # Загрузка начального URL
        self.load_url(initial_url="https://localhost-four.github.io/gamejoil-plug/")

    def load_url(self, initial_url=None):
        if initial_url:
            url = initial_url
            #self.url_bar.setText(url)
        else:
            url = self.url_bar.text()

        if not url.startswith("http"):
            url = "http://" + url

        self.browser.setUrl(QUrl(url))
        self.browser.loadFinished.connect(self.get_title_and_icon)

    def get_title_and_icon(self):
        self.browser.page().titleChanged.connect(self.update_title)
        self.browser.page().iconUrlChanged.connect(self.update_icon)

    def update_title(self, title):
        try:
            self.setWindowTitle(str(title))
        except: pass

    def update_icon(self, icon_url):
        try:
            self.setWindowIcon(str(icon_url.toString()))
        except: pass

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = Browser()
    window.show()
    sys.exit(app.exec_())
