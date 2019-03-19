// 为了页面的美化，把input隐藏
// 点击div要达到点击input的效果
$('div').click(function(){
    // 点击div的时候，相当于点击input
    // 找到input type-file的标签，调用click方法；
    $(':file')[0].click()
})

// 在页面上展示选择的图片section
// 选择完图片，点击‘打开’按钮的时候，会触发change事件
$(':file').on('change',function(){
    console.log('-------')
    console.log(this)
    //找到input选中的文件
    var files = this.files
    // 拼接字符串
    var html = ''
    for(var i = 0 ; i < files.length ;i ++){
        var file = files[i]
        // URL.createOjectURL(文件对象)
        // 根据文件对象生成一个文件地址
        console.log(URL.createObjectURL(file))
        html  += '<img src='+  URL.createObjectURL(file) + '>' 
    }
    $('section').append(html)
})
