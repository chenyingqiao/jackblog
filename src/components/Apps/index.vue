<template>
  <div id="test-editormd">
     <textarea style="display:none;"></textarea>
     <script type="text/javascript">
      $(function() {                
          var testEditor = editormd('test-editormd', {
              width: '90%',
              height: 640,
              markdown : '',
              path : '../lib/',
              imageUpload : true,
              imageFormats : ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
              imageUploadURL : './php/upload.php?test=dfdf',
          });
      });
     </script>
  </div>
</template>