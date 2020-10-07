import qrcode
import os


def saveQrCode(url):
    BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__),"../../"))
    img = qrcode.make(url)
    return img.save('qrCodes/qrcode_test.png')