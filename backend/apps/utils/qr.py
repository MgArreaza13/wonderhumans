import qrcode
import os
from PIL import Image
import sys

def saveQrCode(url, name):

    # Getting a folder to save code and logo to put in code
    BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__),"../../media/qrCodes/"))
    logo = os.path.abspath(os.path.join(os.path.dirname(__file__),"../../apps/utils/logo-01.png"))
    # Checking if a folder exist:
    if not os.path.exists(BASE_DIR):
        print("no existe")
        os.mkdir(BASE_DIR)
    # ----------- Img
    img_bg = Image.open(logo)
    # ---------- Qr Code: Instancing object code
    qr = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_H
    )
    # Adding url to object
    qr.add_data(url)
    # Creating code
    qr.make()
    # Creating img in code
    img_qr = qr.make_image().convert('RGB')
    # Img location (x,y)
    pos = ((img_qr.size[0] - img_bg.size[0]) // 2, (img_qr.size[1] - img_bg.size[1]) // 2)
    # Ordering img in code by location (x,y)
    img_qr.paste(img_bg, pos)
    # Saving code in folder with a dinamic path
    img_qr.save(BASE_DIR + name + '.png')
    return True