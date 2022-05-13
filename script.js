let result = document.getElementById('result');
const $ROC = document.getElementById('ROC');
const $CUDA113 = document.getElementById('CUDA113')
const $note = document.getElementById('note')

check()
textChange()
// click to active selection
$('span').click(function () {
    if ($(this).hasClass('inactive')) {
        $(this).addClass('active')
        $(this).removeClass('inactive')

        $(this).siblings().addClass('inactive')
        $(this).siblings().removeClass('active')
    }
    check()
    textChange()
})

function check () {
    // Linux
    // 11111
    if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch`
    }
    // 11112
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch`
    }
    // 11114
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cpuonly -c pytorch`
    }
    // 21111
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-nightly`
    }
    // 21112
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch-nightly`
    }
    // 21114
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cpuonly -c pytorch-nightly`
    }
    // 31111
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-lts`
    }
    // 31112
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerHTML = `conda install pytorch torchvision torchaudio cudatoolkit=11.1 -c pytorch-lts -c nvidia<br>
        <b>NOTE</b>: 'nvidia' channel is required for cudatoolkit 11.1`
    }
    // 31114
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `conda install pytorch torchvision torchaudio cpuonly -c pytorch-lts`
    }
    // 11211
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision torchaudio`
    }

    // 11212
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113`
    }
    // 11213
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#ROC').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision --extra-index-url https://download.pytorch.org/whl/rocm4.5.2`
    }
    // 11214
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu`
    }
    // 21211
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cu102`
    }
    // 21212
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cu113`
    }
    // 21213
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#ROC').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision --extra-index-url https://download.pytorch.org/whl/nightly/rocm5.1.1`
    }
    // 21214
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cpu`
    }
    // 31211
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `pip3 install torch==1.8.2+cu102 torchvision==0.9.2+cu102 torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html`
    }
    // 31212
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `pip3 install torch==1.8.2+cu111 torchvision==0.9.2+cu111 torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html`
    }
    // 31214
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `pip3 install torch==1.8.2+cpu torchvision==0.9.2+cpu torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html`
    }
    // 11321
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip">https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip</a>
        <br><br>
        Download here (cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip">
        https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip</a>`
    }
    // 11322
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/cu113/libtorch-shared-with-deps-1.11.0%2Bcu113.zip">https://download.pytorch.org/libtorch/cu113/libtorch-shared-with-deps-1.11.0%2Bcu113.zip</a>
        <br><br>
        Download here (cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/cu113/libtorch-shared-with-deps-1.11.0%2Bcu113.zip">
        https://download.pytorch.org/libtorch/cu113/libtorch-shared-with-deps-1.11.0%2Bcu113.zip</a>`
    }
    // 11324
    else if ($('#Stable').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/cpu/libtorch-shared-with-deps-1.11.0%2Bcpu.zip">https://download.pytorch.org/libtorch/cpu/libtorch-shared-with-deps-1.11.0%2Bcpu.zip</a>
        <br><br>
        Download here (cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/cpu/libtorch-shared-with-deps-1.11.0%2Bcpu.zip">
        https://download.pytorch.org/libtorch/cpu/libtorch-shared-with-deps-1.11.0%2Bcpu.zip</a>`
    }
    // 21321
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/nightly/cu102/libtorch-shared-with-deps-latest.zip">https://download.pytorch.org/libtorch/nightly/cu102/libtorch-shared-with-deps-latest.zip</a>
        <br><br>
        Download here (cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/nightly/cu102/libtorch-cxx11-abi-shared-with-deps-latest.zip">
        https://download.pytorch.org/libtorch/nightly/cu102/libtorch-cxx11-abi-shared-with-deps-latest.zip</a>`
    }
    // 21322
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/nightly/cu113/libtorch-shared-with-deps-latest.zip">https://download.pytorch.org/libtorch/nightly/cu113/libtorch-shared-with-deps-latest.zip</a>
        <br><br>
        Download here (cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/nightly/cu113/libtorch-cxx11-abi-shared-with-deps-latest.zip">
        https://download.pytorch.org/libtorch/nightly/cu113/libtorch-cxx11-abi-shared-with-deps-latest.zip</a>`
    }
    // 21324
    else if ($('#Preview').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/nightly/cpu/libtorch-shared-with-deps-latest.zip">https://download.pytorch.org/libtorch/nightly/cpu/libtorch-shared-with-deps-latest.zip</a>
        <br><br>
        Download here (cxx11 ABI):
        <a href="https://download.pytorch.org/libtorch/nightly/cpu/libtorch-shared-with-deps-latest.zip">
        https://download.pytorch.org/libtorch/nightly/cpu/libtorch-shared-with-deps-latest.zip</a>`
    }
    // 31321
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
            <a href="https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-shared-with-deps-1.8.2%2Bcu102.zip">https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-shared-with-deps-1.8.2%2Bcu102.zip</a>
            <br><br>
            Download here (cxx11 ABI):
            <a href="https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu102.zip">
            https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu102.zip</a>`
    }
    // 31322
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
            <a href="https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-shared-with-deps-1.8.2%2Bcu111.zip">https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-shared-with-deps-1.8.2%2Bcu111.zip</a>
            <br><br>
            Download here (cxx11 ABI):
            <a href="https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-shared-with-deps-1.8.2%2Bcu111.zip">
            https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-shared-with-deps-1.8.2%2Bcu111.zip</a>`
    }
    // 31324
    else if ($('#LTS').hasClass('active') && $('#Linux').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `Download here (Pre-cxx11 ABI):
            <a href="https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-shared-with-deps-1.8.2%2Bcpu.zip">https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-shared-with-deps-1.8.2%2Bcpu.zip</a>
            <br><br>
            Download here (cxx11 ABI):
            <a href="https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcpu.zip">
            https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcpu.zip</a>`
    }


    // Mac
    // 12324
    else if ($('#Preview').hasClass('active') && $('#Mac').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `Download here:
        <a href="https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.11.0.zip">https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.11.0.zip</a>`
    }
    // 22224
    else if ($('#Preview').hasClass('active') && $('#Mac').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `Download here:
        <a href="https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip">https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip</a>`
    }
    // 12214
    else if ($('#Stable').hasClass('active') && $('#Mac').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision torchaudio`
    }


    // Windows
    // 13111
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch`
    }
    // 13112
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch`
    }
    // 13114
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cpuonly -c pytorch`
    }
    // 23111
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-nightly`
    }
    // 23112
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch-nightly`
    }
    // 23114
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cpuonly -c pytorch-nightly`
    }
    // 33111
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-lts`
    }
    // 33112
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerHTML = `conda install pytorch torchvision torchaudio cudatoolkit=11.1 -c pytorch-lts -c nvidia<br>
    <b>NOTE</b>: 'nvidia' channel is required for cudatoolkit 11.1`
    }
    // 33114
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#Conda').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `conda install pytorch torchvision torchaudio cpuonly -c pytorch-lts`
    }
    // 13211
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision torchaudio`
    }

    // 13212
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113`
    }
    // 13213
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#ROC').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision --extra-index-url https://download.pytorch.org/whl/rocm4.5.2`
    }
    // 13214
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu`
    }
    // 23211
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cu102`
    }
    // 23212
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cu113`
    }
    // 23213
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#ROC').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision --extra-index-url https://download.pytorch.org/whl/nightly/rocm5.1.1`
    }
    // 23214
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cpu`
    }
    // 33211
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerText = `pip3 install torch==1.8.2+cu102 torchvision==0.9.2+cu102 torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html`
    }
    // 33212
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerText = `pip3 install torch==1.8.2+cu111 torchvision==0.9.2+cu111 torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html`
    }
    // 33214
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `pip3 install torch==1.8.2+cpu torchvision==0.9.2+cpu torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html`
    }
    // 13321
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerHTML = `CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3`
    }
    // 13322
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerHTML = `Download here (Release Version):
            <a href="https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-1.11.0%2Bcu113.zip">https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-1.11.0%2Bcu113.zip</a>
            <br><br>
            Download here (Debug Version):
            <a href="https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-debug-1.11.0%2Bcu113.zip">
            https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-debug-1.11.0%2Bcu113.zip</a>`
    }
    // 13324
    else if ($('#Stable').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `Download here (Release Version):
            <a href="https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-1.11.0%2Bcpu.zip">https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-1.11.0%2Bcpu.zip</a>
            <br><br>
            Download here (Debug Version):
            <a href="https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-debug-1.11.0%2Bcpu.zip">
            https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-debug-1.11.0%2Bcpu.zip</a>`
    }
    // 23321
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerHTML = `CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3`
    }
    // 23322
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerHTML = `Download here (Release Version):
            <a href="https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-latest.zip">https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-latest.zip</a>
            <br><br>
            Download here (Debug Version):
            <a href="https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-debug-latest.zip">
            https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-debug-latest.zip</a>`
    }
    // 23324
    else if ($('#Preview').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `Download here (Release Version):
            <a href="https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-latest.zip">https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-latest.zip</a>
            <br><br>
            Download here (Debug Version):
            <a href="https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-debug-latest.zip">
            https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-debug-latest.zip</a>`
    }
    // 33321
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA102').hasClass('active')) {
        result.innerHTML = `Download here (Release Version):
                <a href="https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-1.8.2%2Bcu102.zip">https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-1.8.2%2Bcu102.zip</a>
                <br><br>
                Download here (Debug Version):
                <a href="https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu102.zip">
                https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu102.zip</a>`
    }
    // 33322
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CUDA113').hasClass('active')) {
        result.innerHTML = `Download here (Release Version):
                <a href="https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-1.8.2%2Bcu111.zip">https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-1.8.2%2Bcu111.zip</a>
                <br><br>
                Download here (Debug Version):
                <a href="https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu111.zip">
                https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu111.zip</a>`
    }
    // 33324
    else if ($('#LTS').hasClass('active') && $('#Windows').hasClass('active') && $('#LibTorch').hasClass('active') && $('#C').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerHTML = `Download here (Release Version):
                <a href="https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-1.8.2%2Bcpu.zip">https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-1.8.2%2Bcpu.zip</a>
                <br><br>
                Download here (Debug Version):
                <a href="https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-debug-1.8.2%2Bcpu.zip">
                https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-debug-1.8.2%2Bcpu.zip</a>`
    }


    // Common
    // ??4??
    else if ($('#Source').hasClass('active')) {
        result.innerHTML = `# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source`
    }
    // 2?214
    else if ($('#Preview').hasClass('active') && $('#Pip').hasClass('active') && $('#Python').hasClass('active') && $('#CPU').hasClass('active')) {
        result.innerText = `pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cpu`
    }
    // Not Supported
    else {
        result.innerText = `Not Supported`
    }

}

function textChange () {
    // text change
    if ($('#Preview').hasClass('active')) {
        $ROC.innerHTML = "ROCM 5.1.1 (beta)"
    }
    else {
        $ROC.innerHTML = "ROCm 4.2(beta)"
    }
    if ($('#LTS').hasClass('active')) {
        $CUDA113.innerHTML = "CUDA 11.1"
        $note.innerHTML =

            `
            <br><p>NOTE: Additional support for these binaries may be provided by <a href="https://pytorch.org/enterprise-support-program">PyTorch Enterprise Support Program Participants.</a></p>
        `
    }
    else {
        $CUDA113.innerHTML = "CUDA 11.3"
        $note.innerHTML = ``
    }

}