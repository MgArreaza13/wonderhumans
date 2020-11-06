import qrcode
import os
from PIL import Image
import sys

def saveQrCode(url, name):

    BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__),"../../media"))
    logo = os.path.abspath(os.path.join(os.path.dirname(__file__),"../../apps/utils/logo-01.png"))
    
    # ----------- Img
    #size= 150,150

    img_bg = Image.open(logo)
    """for infile in sys.argv[1:]:
        outfile = os.path.splitext(infile)[0] + ".thumbnail"
        if infile != outfile:
            try:
                with Image.open(logo) as img_bg:
                    img_bg.thumbnail(size)
                    img_bg.save(outfile, "PNG")
            except OSError:
                print("cannot create thumbnail for", infile)"""
    # ---------- Qr Code
    qr = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_H
    )

    qr.add_data(url)
    qr.make()

    img_qr = qr.make_image().convert('RGB')

    pos = ((img_qr.size[0] - img_bg.size[0]) // 2, (img_qr.size[1] - img_bg.size[1]) // 2)

    img_qr.paste(img_bg, pos)

    img_qr.save(BASE_DIR + '/qrCodes/'+ name + '.png')
    return True