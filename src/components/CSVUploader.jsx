const CSVUploader = () => {
    const handleUpload = (event) => {
      const file = event.target.files[0];
      // Parse CSV logic here
    };
  
    return (
      <input
        type="file"
        accept=".csv"
        onChange={handleUpload}
        className="border p-2 rounded"
      />
    );
  };
  
  export default CSVUploader;
  