import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

const FileUploadDemo = () => {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onBasicUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    const onBasicUploadAuto = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Advanced</h5>
                <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                    emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />

                <h5>Basic</h5>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />

                <h5>Basic with Auto</h5>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />
            </div>
        </div>
    )
}