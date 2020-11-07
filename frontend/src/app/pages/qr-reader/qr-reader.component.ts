import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";

@Component({
    selector: 'app-qr-reader',
    templateUrl: './qr-reader.component.html',
    styleUrls: ['./qr-reader.component.scss']
})
export class QrReaderComponent implements OnInit {

    availableDevices: MediaDeviceInfo[];
    currentDevice: MediaDeviceInfo = null;
    hasDevices: boolean;
    hasPermission: boolean;
    qrResult: any = true;
    guestExist: boolean;

    constructor(private router: Router) { }

    ngOnInit(): void { }

    clearResult(): void {
        this.qrResult = true;
    }

    onCodeResult(resultString: string): void {
        console.log(resultString);
        if (resultString.includes('homeless-profile/')) {
            this.qrResult = resultString;
            this.goto();
            console.log('si');
        } else {
            console.log('no');
        }
    }

    goto() {
        console.log('entre aca');
        this.router.navigateByUrl(this.qrResult);
    }

    onHasPermission(has: boolean): void {
        this.hasPermission = has;
    }


    clearMessage() {
        setTimeout(() => {
            this.guestExist = null;
        }, 3000);
    }

    checkQRJSON(qrString: string): boolean {
        if (
            /^[\],:{}\s]*$/.test(
                qrString
                    .replace(/\\["\\\/bfnrtu]/g, "@")
                    .replace(
                        /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        "]"
                    )
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
            )
        ) {
            return true;
        } else {
            return false;
        }
    }


    validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }




}
