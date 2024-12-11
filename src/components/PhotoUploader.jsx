import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function PhotoUploader({ onUpload }) {
  const [uploadMethod, setUploadMethod] = useState('direct');
  const [driveLink, setDriveLink] = useState('');
  const [imagePreviews, setImagePreviews] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Convert files to URL for previews
    const filePreviews = acceptedFiles.map(file => ({
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    // Update image previews
    setImagePreviews(filePreviews);
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.jpg, .jpeg, .png, .heif',  // Restrict file types
  });

  const handleDriveLinkSubmit = (e) => {
    e.preventDefault();
    onUpload(driveLink);
    setDriveLink('');
  };

  const handleLocalFileSelect = (e) => {
    const files = Array.from(e.target.files);

    // Create previews for local files
    const localFilePreviews = files.map(file => ({
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    // Update image previews
    setImagePreviews(localFilePreviews);
    
    // Call the upload handler
    onUpload(files);
  };

  return (
    <div className="mb-6">
      <div className="flex mb-4">
        <button
          className={`mr-2 py-2 px-4 rounded-t-lg ${uploadMethod === 'direct' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setUploadMethod('direct')}
        >
          Direct Upload
        </button>
        <button
          className={`mr-2 py-2 px-4 rounded-t-lg ${uploadMethod === 'drive' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setUploadMethod('drive')}
        >
          Google Drive
        </button>
        <button
          className={`py-2 px-4 rounded-t-lg ${uploadMethod === 'local' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setUploadMethod('local')}
        >
          Local Files
        </button>
      </div>

      {uploadMethod === 'direct' && (
        <div {...getRootProps()} className={`border-2 border-dashed rounded-md p-4 ${isDragActive ? 'border-teal-500' : 'border-gray-300'}`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-center">Drop the files here ...</p>
          ) : (
            <p className="text-center">Drag 'n' drop some files here, or click to select files</p>
          )}
          {imagePreviews.length > 0 && (
            <div className="mt-4 grid  gap-4">
              {imagePreviews.map(({ preview, name }) => (
                <img key={name} src={preview} alt={name} className="object-cover w-full h-auto" />
              ))}
            </div>
          )}
        </div>
      )}

      {uploadMethod === 'drive' && (
        <form onSubmit={handleDriveLinkSubmit}>
          <input
            type="text"
            className="w-full border-gray-300 rounded-md p-2 mb-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Paste Google Drive folder link"
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
          />
          <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600">
            Upload from Drive
          </button>
        </form>
      )}

      {uploadMethod === 'local' && (
        <div>
          <input
            type="file"
            multiple
            accept=".jpg, .jpeg, .png, .heif"
            onChange={handleLocalFileSelect}
            className="w-full border-gray-300 rounded-md p-2 focus:ring-teal-500 focus:border-teal-500"
          />
          {imagePreviews.length > 0 && (
            <div className="mt-4 grid  gap-4">
              {imagePreviews.map(({ preview, name }) => (
                <img key={name} src={preview} alt={name} className="object-cover w-full h-auto" />
              ))}
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}

export default PhotoUploader;
