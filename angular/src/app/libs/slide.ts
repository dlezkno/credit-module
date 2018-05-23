declare var $:any;

class slide{
    previous_fs;
    left;
    opacity;
    scale;
    
    constructor(){
    }

    nextTab($tab:any){
        var $this = document.getElementById('btn_client');
        if($tab != "client"){
          $this = document.getElementById('btn_credit');
        }
        var current_fs = $($this).parent().parent();
        var next_fs = $($this).parent().parent().next();
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show(); 
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
            this.scale = 1 - (1 - now) * 0.2;
            this.left = (now * 50)+"%";
            this.opacity = 1 - now;
            current_fs.css({
                'transform': 'this.scale('+this.scale+')',
                'position': 'absolute'
            });
            next_fs.css({'left': this.left, 'opacity': this.opacity});
            }, 
            duration: 500, 
            complete: function(){
            current_fs.hide();
            }, 
            easing: 'easeInOutBack'
        });
    }

    previousTab(){
        var $this = document.getElementById('btn_credit');
        var current_fs = $($this).parent().parent();
        var previous_fs = $($this).parent().parent().prev();
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        previous_fs.show(); 
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                this.scale = 0.8 + (1 - now) * 0.2;
                this.left = ((1-now) * 50)+"%";
                this.opacity = 1 - now;
                current_fs.css({'left': this.left});
                previous_fs.css({'transform': 'scale('+this.scale+')', 'opacity': this.opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
            }, 
            easing: 'easeInOutBack'
        });
    }
}

export const TAB = new slide();