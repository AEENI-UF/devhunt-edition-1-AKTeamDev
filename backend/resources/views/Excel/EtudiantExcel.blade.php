<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/import" method="POST" enctype="multipart/form-data">
    <div class="modal-body">
                    
                    <div class="form-group">
                            
                        <label for="file" class="col-md-3 control-label"></label>
                        <div class="col-md-6">
                            <input type="file" id="file" name="file" class="form-control" autofocus required>
                            <span class="help-block with-errors"></span>
                            <!-- {!! $errors->first('file','<p class="alert alert-danger">:message</p>') !!} -->
                        </div> 
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-save">Importer</button>
                </div>
    </form>
</body>
</html>