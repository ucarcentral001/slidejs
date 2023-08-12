function eventedSlider_(){
document.querySelectorAll('.slide_container:not(.evented)')
    .forEach(function(container_){

        container_.classList.add('evented');
        let items_ = container_.querySelectorAll('.separator');
        if( items_.length ){
            let i = 0;
            setInterval(function(){
                items_.forEach(function(item_){ item_.classList.remove('active'); });
                items_[i].classList.add('active');
                i = i+1 < items_.length ? i+1 : 0;
            },5000);
        }
    });

}
eventedSlider_();
