

<!DOCTYPE html>
<html>
<head>
    <title>Brain Tumour Detection</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        .navbar {
            background-color: rgb(73, 200, 109);
            overflow: hidden;
            text-align: right;
        }
        .navbar a {
            float: left;
            text-align: right;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .content {
            padding: 20px;
        }
        .upload-form {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        h1{
            text-align: center;
            margin-bottom: 2%;
            color: rgb(66, 157, 92);
        
        }

        
    </style>
</head>
<body>
    
    <div class="navbar">
        
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Doctor</a>
        <a href="index.php?logout='1'" ">logout</a>
        </div>

    <div class="content">
        

    <h1>Welcome to Early Brain Tumor Detection</h1>

        <div class="upload-form">
            <h2>Upload MRI Images and Files</h2>
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <label for="image">Upload MRI Image (JPG or PNG):</label>
                <input type="file" name="image" id="image" accept="image/jpeg, image/png" required><br><br>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</body>
</html>
